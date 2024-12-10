import React from "react";

interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
    return (
        <div className={className}>
            <div>
                <h4 className="text-sky-400 text-2xl	font-bold text-center">
                    Footer
                </h4>
            </div>
        </div>
    );
};
