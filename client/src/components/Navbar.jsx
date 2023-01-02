import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import { useStateContext } from "../context";

const Navbar = () => {
    const navigate = useNavigate();
    const { connect, address } = useStateContext();

    return (
        <div className="flex mb-9 gap-6 mt-4 pr-5 justify-end">
            <div className="justify-end rounded-3xl">
                <CustomButton
                    btnType="button"
                    title={address ? "Create Nft" : "Connect wallet"}
                    styles={
                        address
                            ? "bg-white text-slate-700 w-44"
                            : "bg-slate-300 text-gray-600"
                    }
                    handleClick={() => {
                        if (address) navigate("create-nft");
                        else connect();
                    }}
                />
            </div>
        </div>
    );
};

export default Navbar;
