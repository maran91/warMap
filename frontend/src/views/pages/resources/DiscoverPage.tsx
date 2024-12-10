import { AdminLayout } from "../../layout/AdminLayout";
import React from "react";
import { discoverService } from "../../../api/resources/discover.service";
import { useAuth } from "../../../hooks/useAuth";

interface DiscoverPageProps {
    foodAmount: number;
    landCleared: number;
}

export const DiscoverPage: React.FC<DiscoverPageProps> = ({
    foodAmount,
    landCleared,
}) => {
    const { userResources } = useAuth();
    const [responseText, setResponseText] = React.useState<string>("");
    const [timeLeft, setTimeLeft] = React.useState<number>(0);

    const handleDiscovery = async () => {
        try {
            const data = await discoverService.discoverLand();
            userResources?.forEach((resource) => {
                if (resource.resource_name.toLowerCase() === "territory") {
                    resource.quantity = data.quantity;
                    setResponseText(data.message);
                    setTimeLeft(data.time_left);
                    console.log("data", data);
                }
            });
        } catch (error: any) {
            console.log("Discovering land failed:", error);
        }
    };
    return (
        <>
            <AdminLayout>
                <h2 className="text-2xl font-bold">
                    Land Cleared:{landCleared}
                </h2>
                <h2 className="text-2xl font-bold">
                    Food Per Hour:{foodAmount}
                </h2>
                <div className="flex flex-col items-center h-full">
                    <h1 className="text-4xl font-bold">Discover</h1>
                    <p className="text-lg text-gray-500">
                        Embark on a mission to explore and clear the surrounding
                        map of foreign fighters. Each square mile of cleared
                        land will generate 35 food to sustain your group.
                    </p>
                    <p className="text-lg"> land cleared:</p>
                    <div className="flex flex-col space-x-4 items-center">
                        <button
                            className="bg-gray-800 text-white px-4 justify-center py-2 rounded-lg"
                            onClick={handleDiscovery}
                        >
                            Discover and clear
                        </button>
                        <p>{responseText}</p>
                        <p>{Math.floor(timeLeft/60)} minutes left</p>
                        <p>{timeLeft%60} second left</p>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
};
