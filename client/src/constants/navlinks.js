import home from "../assets/home.svg";
import nft from "../assets/nft.svg";
import payment from "../assets/payment.svg";
import logout from "../assets/logout.svg";
import profile from "../assets/profile.svg";

export const navlinks = [
    {
        name: "home",
        imgUrl: home,
        link: "/",
    },
    {
        name: "nft",
        imgUrl: nft,
        link: "/create-nft",
    },
    {
        name: "profile",
        imgUrl: profile,
        link: "/profile",
    },
    {
        name: "payment",
        imgUrl: payment,
        link: "/payment",
        disabled: true,
    },
    {
        name: "logout",
        imgUrl: logout,
        // link: "/logout",
        // disabled: true,
    },
];
