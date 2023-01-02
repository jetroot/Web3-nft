import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/logo.svg";
import sun from "../assets/sun.svg";
import { navlinks } from "../constants/navlinks";
import { useStateContext } from "../context";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => {
    return (
        <div
            className={`w-12 h-12 rounded-xl ${
                isActive && isActive === name && "bg-slate-200"
            } flex justify-center items-center ${
                !disabled && "cursor-pointer"
            } ${styles}`}
            onClick={handleClick}
        >
            {!isActive ? (
                <img src={imgUrl} alt="logo" className="w-1/2 h-1/2" />
            ) : (
                <img
                    src={imgUrl}
                    alt="logo"
                    className={`w-1/2 h-1/2 ${
                        isActive !== name && "grayscale"
                    }`}
                />
            )}
        </div>
    );
};

const Sidebar = () => {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState("home");
    const { disconnect, address } = useStateContext();

    return (
        <div className="flex flex-col items-center justify-between sticky top-5 h-[93vh]">
            <Link to="/">
                <Icon styles="w-12 h-12 bg-white" imgUrl={logo} />
            </Link>

            <div className="flex-1 flex flex-col justify-between items-center bg-slate-400 rounded-3xl w-16 py-4 mt-12">
                <div className="flex flex-col justify-center items-center gap-3">
                    {navlinks.map((item, index) => {
                        return (
                            <Icon
                                key={index}
                                {...item}
                                isActive={isActive}
                                handleClick={() => {
                                    if (!item.disabled) {
                                        setIsActive(item.name);
                                        navigate(item.link);
                                    }

                                    if (item.name === "logout" && address) {
                                        disconnect();
                                    }
                                }}
                            />
                        );
                    })}
                </div>

                <Icon imgUrl={sun} disabled={true} />
            </div>
        </div>
    );
};

export default Sidebar;
