import React from "react";
import { Menu } from "primereact/menu";

export const HomePage = () => {
    const items = [
        {
            label: "Majandus",
            icon: "pi pi-fw pi-file",
            items: [
                { label: "Tööstus", icon: "pi pi-money-bill" },
                {
                    label: "Riik",
                    icon: "pi pi-fw pi-folder-open",
                },
            ],
        },
        {
            label: "Sõjandus",
            icon: "pi pi-fw pi-pencil",
            items: [
                { label: "Värbamine", icon: "pi pi-users" },
                { label: "Kaart", icon: "pi pi-globe" },
            ],
        },
        {
            label: "Seaded",
            icon: "pi pi-fw pi-question",
            items: [{ label: "Profiil", icon: "pi pi-wrench" }],
        },
    ];

    return (
        <div>
            <Menu model={items} />
        </div>
    );
};
