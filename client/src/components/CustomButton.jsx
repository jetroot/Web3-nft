const CustomButton = ({ btnType, title, handleClick, styles }) => {
    return (
        <button
            type={btnType}
            className={`font-semibold text-[16px] leading-[26px] text-white min-h-[50px] px-4 rounded-full ${styles}`}
            onClick={handleClick}
        >
            {title}
        </button>
    );
};

export default CustomButton;
