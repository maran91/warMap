import React from "react";
import { useRecruitment } from "../../hooks/useRecruitment";

export const RecruitmentPage: React.FC = () => {
    const { handleRecruitment, handleAmountChange, error, amount, success } =
        useRecruitment();
    return (
        <>
            <form onSubmit={handleRecruitment}>
                <input
                    value={amount}
                    type="number"
                    onChange={handleAmountChange}
                    placeholder="Amount to recruit"
                />

                <button>Recruit</button>
            </form>
            <h4 className="text-red-800 text-2xl font-bold">{error} </h4>
            <h4 className="text-green-700 text-2xl font-bold">{success} </h4>
        </>
    );
};
