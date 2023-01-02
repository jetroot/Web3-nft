import { useContext, createContext } from "react";
import {
    useAddress,
    useContract,
    useMetamask,
    useContractWrite,
    useDisconnect,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract(
        // "0x8e0badaa4E65E89286A390f406F5415b6e1F4bc8"
        "0x8317C6949bD1a21976a3880D2222867E74Da3e40"
    );
    const { mutateAsync: createNft } = useContractWrite(contract, "createNft");
    const address = useAddress();
    const connect = useMetamask();
    const disconnect = useDisconnect();

    const publishNft = async (form) => {
        try {
            const data = await createNft([
                address,
                form.title,
                form.description,
                form.image,
                form.price,
                new Date(form.deadline).getTime(),
            ]);

            console.error("successfully creating nft");
        } catch (err) {
            console.error("failed creating nft", err);
        }
    };

    const getNfts = async () => {
        const nfts = await contract.call("getNfts");

        const parseNfts = nfts.map((nft, i) => ({
            owner: nft.owner,
            title: nft.title,
            description: nft.description,
            price: ethers.utils.formatEther(nft.price.toString()),
            image: nft.image,
            deadline: nft.deadline.toNumber(),
            pid: i,
        }));

        return parseNfts;
    };

    const getNumberOfNfts = async () => {
        let numberOfNfts = 0;
        const allNfts = await getNfts();

        allNfts.map((nft) => {
            if (nft.owner === address) {
                numberOfNfts += 1;
            }
        });

        return numberOfNfts;
    };

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                connect,
                disconnect,
                getNumberOfNfts,
                getNfts,
                createNft: publishNft,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
