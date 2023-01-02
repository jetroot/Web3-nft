import { useState, useEffect } from "react";
import { useStateContext } from "../context";
import DisplayNfts from "../components/DisplayNfts";

export const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [nfts, setNfts] = useState([]);
    const { address, contract, getNfts } = useStateContext();

    const fetchNfts = async () => {
        const data = await getNfts();
        setNfts(data);
        setIsLoading(false);
    };

    useEffect(() => {
        if (contract) fetchNfts();
    }, [address, contract]);

    return <DisplayNfts title="All Nfts" isLoading={isLoading} nfts={nfts} />;
};
