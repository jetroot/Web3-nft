import { useStateContext } from "../context";
import { useState, useEffect } from "react";
import loader from "../assets/loader.svg";

const Profile = () => {
    const [numberOfNfts, setNumberOfNfts] = useState("");
    const { address, getNumberOfNfts } = useStateContext();
    const [isLoading, setisLoading] = useState(true);

    const fetchNumberOfNfts = async () => {
        setisLoading(true);
        const data = await getNumberOfNfts();
        setNumberOfNfts(data);
        setisLoading(false);
    };

    useEffect(() => {
        fetchNumberOfNfts();
    }, [getNumberOfNfts, address]);

    return (
        <div className="flex flex-wrap">
            {isLoading && (
                <img src={loader} alt="loader" className="w-24 h-24" />
            )}
            {!isLoading && (
                <div className="flex flex-wrap gap-4">
                    <div className="bg-slate-300 rounded-xl w-72 flex flex-col">
                        <h1 className="font-semibold flex justify-center items-center bg-slate-100 w-full rounded-t-xl p-3">
                            Owner
                        </h1>
                        <p className="bg-slate-200 rounded-b-xl p-3 truncate text-center">
                            {address ? (
                                <span className="font-mono">
                                    {address.substring(0, 5)}...
                                    {address.substring(
                                        address.length,
                                        address.length - 5
                                    )}
                                </span>
                            ) : (
                                "Not Connected Yet!"
                            )}
                        </p>
                    </div>

                    <div className="bg-slate-300 rounded-xl w-72 flex flex-col">
                        <h1 className="font-semibold flex justify-center items-center bg-slate-100 w-full rounded-t-xl p-3">
                            Nfts Created
                        </h1>
                        <p className="bg-slate-200 rounded-b-xl p-3 truncate text-center">
                            {numberOfNfts}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
