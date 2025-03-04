import React from "react";
import { useRecruitment } from "../../hooks/useRecruitment";
import { InputNumber } from "primereact/inputnumber";
import recruitmentImage from "../../../assets/images/recruitment.jpeg";

export const RecruitmentPage: React.FC = () => {
    const { handleRecruitment, handleAmountChange, error, amount, success } =
        useRecruitment();
    return (
        <div>
            <h1 className="text-center text-3xl mt-20 mb-6 text-light-gray font-bold">
                Recruit
            </h1>

            <div className="mt-20">
                {" "}
                <form
                    className=" flex items-center justify-center text-center"
                    onSubmit={handleRecruitment}
                >
                    <div className="flex-1">
                        <img
                            src={recruitmentImage}
                            alt="Recruitment Icon"
                            className="mb-4 w-32 h-32 rounded-xl"
                        />
                    </div>

                    <div className="flex-1">
                        <p className="text-sm leading-relaxed text-center text-white m-3">
                            Trained in basic combat and unwavering in their
                            duty, the regular soldier forms the backbone of your
                            fighting force.
                        </p>
                    </div>
                    <div className="flex-1">
                        <p className="text-m leading-relaxed text-center text-white m-3">
                            5&nbsp;FOOD
                        </p>
                    </div>
                    <div className="flex-1">
                        <InputNumber
                            value={amount}
                            onValueChange={handleAmountChange}
                            min={0}
                            placeholder="Amount to recruit"
                            inputClassName="w-40  px-2 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none"
                        />
                    </div>
                    <div className="flex-1">
                        <button className=" p-button bg-dark-red-orange text-white rounded-md shadow-md hover:bg-olive-green hover:scale-105 font-bold py-2 px-4 text-center ">
                            Recruit
                        </button>
                    </div>
                </form>
                <h4 className="text-red-800 text-2xl font-bold">{error} </h4>
                <h4 className="text-green-700 text-2xl font-bold">
                    {success}{" "}
                </h4>
            </div>
        </div>
    );
};
