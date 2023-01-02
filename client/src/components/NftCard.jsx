import { daysLeft } from "../utils";

const NftCard = ({ owner, title, description, image, price, deadline }) => {
    const remainingDays = daysLeft(deadline);

    return (
        <div className="sm:w-80 rounded-xl bg-slate-300 mx-4">
            <img
                src={image}
                alt={`${title}`}
                className="w-full h-48 object-cover rounded-xl"
            />

            <div className="flex flex-col p-4">
                <div className="block">
                    <h3 className="font-bold text-sm text-left leading-6 text-gray-900 first-letter:capitalize">
                        {title}
                    </h3>
                    <div className="w-full h-20">
                        <p className="mt-2 font-normal text-sm text-gray-600 h-full text-ellipsis overflow-hidden">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="flex justify-between flex-wrap mt-4 gap-2">
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-sm text-gray-700 leading-5 ">
                            {price} ETH
                        </h4>
                        <p className="mt-1 font-normal text-[12px] leading-4 text-slate-500">
                            Price
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <h4 className="font-semibold text-sm text-gray-700 leading-5 ">
                            {remainingDays}
                        </h4>
                        <p className="mt-1 font-normal text-[12px] leading-4 text-slate-500">
                            Dayls Left
                        </p>
                    </div>
                </div>

                <div className="text-gray-600 font-semibold flex flex-1 mt-2">
                    Created By{" "}
                    <span className="text-slate-400 pl-2">
                        {owner.substring(0, 5)}...
                        {owner.substring(owner.length, owner.length - 5)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NftCard;
