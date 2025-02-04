import React from "react";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import {ColorOption} from "../../../types/ColorOption.type";
import {AuthSignupErrorsType} from "../../../types/auth.type";

interface Props {
    color: ColorOption | null;
    setColor: React.Dispatch<React.SetStateAction<ColorOption | null>>;
    errors: AuthSignupErrorsType;
}

export const ColorSelect: React.FC<Props> = ({ color, setColor, errors }) => {
    const colors: ColorOption[] = [
        { value: "#e74c3c", label: "Red" },
        {
            value: "#3498db",
            label: "Blue",
        },
        { value: "#2ecc71", label: "Green" },
        { value: "#f1c40f", label: "Yellow" },
        {
            value: "#2c3e50",
            label: "Dark Blue",
        },
        { value: "#95a5a6", label: "Gray" },
        { value: "#9b59b6", label: "Purple" },
        { value: "#ba4a00", label: "Brown" },
    ];

    const handleChange = (e: DropdownChangeEvent) => {
        setColor(e.value as ColorOption);
    };

    return (
        <div className="w-full max-w-sm mx-auto">
            <Dropdown
                value={color}
                onChange={handleChange}
                options={colors}
                optionLabel="label"
                placeholder="Select a color"
                className={`w-full ${
                    errors.errors?.color
                        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                        : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                }`}
                pt={{
                    root: {
                        className: "w-full px-4 py-2 mb-3 mr-3 rounded-lg shadow-md transition-all"
                    },
                    panel: {
                        className: "rounded-lg bg-white shadow-lg"
                    }
                }}
            />
            {errors.errors?.color && (
                <p className="mt-2 text-sm text-red-600">
                    {errors.errors.color[0]}
                </p>
            )}
        </div>
    );
};
