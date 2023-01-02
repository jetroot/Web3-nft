import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import CustomButton from "../components/CustomButton";
import FormField from "../components/FormField";
import { useStateContext } from "../context";
import Loader from "../components/Loader";

const CreateNft = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        title: "",
        image: "",
        description: "",
        price: "",
        deadline: "",
    });
    const { createNft } = useStateContext();

    const handleFormFieldChange = (e, fieldName) => {
        setForm({ ...form, [fieldName]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        await createNft({
            ...form,
            price: ethers.utils.parseUnits(form.price),
        });
        setIsLoading(false);
        navigate("/");

        // console.log(form);
    };

    return (
        <div className="flex justify-center mx-8 my-2">
            <div className="w-full bg-slate-400 flex justify-center items-center flex-col rounded-lg sm:p-10 py-2">
                {isLoading && <Loader />}

                <div className="flex justify-center items-center bg-gray-300 w-10/12 p-3 rounded-xl sm:min-w-[300px]">
                    <h1 className="capitalize font-bold sm:text-2xl text-lg leading-9 text-gray-600">
                        Create nft
                    </h1>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="w-full mt-16 flex flex-col gap-7"
                >
                    <div className="flex flex-wrap gap-10 ">
                        <FormField
                            labelName="Title *"
                            placeholder="Write a title"
                            inputType="text"
                            value={form.title}
                            handleChange={(e) => {
                                handleFormFieldChange(e, "title");
                            }}
                        />
                        <FormField
                            labelName="Image *"
                            placeholder="Url of the nft"
                            inputType="text"
                            value={form.image}
                            handleChange={(e) => {
                                handleFormFieldChange(e, "image");
                            }}
                        />
                    </div>
                    <FormField
                        labelName="Description *"
                        placeholder="Write description"
                        inputType="text"
                        value={form.description}
                        isTextArea={true}
                        handleChange={(e) => {
                            handleFormFieldChange(e, "description");
                        }}
                    />
                    <div className="flex flex-wrap gap-10 ">
                        <FormField
                            labelName="Price *"
                            placeholder="0.1 Eth"
                            inputType="number"
                            value={form.price}
                            handleChange={(e) => {
                                handleFormFieldChange(e, "price");
                            }}
                        />
                        <FormField
                            labelName="End date *"
                            placeholder="End date"
                            inputType="date"
                            value={form.deadline}
                            handleChange={(e) => {
                                handleFormFieldChange(e, "deadline");
                            }}
                        />
                    </div>

                    <div className="flex justify-center items-center bg-slate-300 rounded-lg mx-2">
                        <CustomButton
                            btnType={"submit"}
                            title={"Create new nft"}
                            styles={"bg-green text-gray-800"}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNft;
