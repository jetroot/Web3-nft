import React from "react";
import loader from "../assets/loader.svg";
import NftCard from "./NftCard";

const DisplayNfts = ({ title, isLoading, nfts }) => {
    return (
        <div>
            <h1 className="font-semibold text-slate-300 pl-2">
                {title} ({nfts.length})
            </h1>

            <div className="flex flex-wrap mt-[20px] gap-[26px]">
                {isLoading && (
                    <img
                        src={loader}
                        alt="loading"
                        className="w-24 h-24 object-contain text-gray-200"
                    />
                )}

                {!isLoading && nfts.length === 0 && (
                    <p className="font-semibold text-sm pl-2 text-gray-400 leading-7">
                        There are no nfts right now !
                    </p>
                )}

                {!isLoading &&
                    nfts.length > 0 &&
                    nfts.map((nft, index) => <NftCard key={index} {...nft} />)}
            </div>
        </div>
    );
};

export default DisplayNfts;
