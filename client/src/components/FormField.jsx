import React from "react";

const FormField = ({
    labelName,
    placeholder,
    inputType,
    value,
    isTextArea,
    handleChange,
}) => {
    return (
        <label className="flex-1 w-full flex flex-col mx-4">
            {labelName && (
                <span className="font-medium text-sm text-gray-700 mb-3">
                    {labelName}
                </span>
            )}

            {isTextArea ? (
                <textarea
                    required
                    value={value}
                    onChange={handleChange}
                    type={inputType}
                    rows={10}
                    placeholder={placeholder}
                    className={`mr-7 py-3 sm:px-6 px-6 outline-none border-[1px] border-slate-600 text-slate-700 placeholder:text-gray-600 rounded-md bg-transparent `}
                />
            ) : (
                <input
                    required
                    value={value}
                    onChange={handleChange}
                    type={inputType}
                    placeholder={placeholder}
                    className={`py-3 sm:px-6 px-6 outline-none border-[1px] border-slate-600 text-slate-700 placeholder:text-gray-600 rounded-md bg-transparent`}
                />
            )}
        </label>
    );
};

export default FormField;
