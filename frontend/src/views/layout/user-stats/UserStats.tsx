import React from "react";
import { UserResources } from "../../../types/userResources.type";
import { useUserResources } from "../../../context/UserResourcesContext";

export const UserStats = () => {
    const { userResources }: { userResources: UserResources | null } =
        useUserResources();

    return (
        <div className=" flex flex-wrap justify-center gap-5">
            {/* Resources */}
            {userResources?.resources.map((userResource) => (
                <div
                    className="mt-5 bg-light-gray rounded-lg h-16 p-2 w-40 text-center"
                    key={userResource.id}
                >
                    <p className="text-deep-red text-m font-semibold">
                        {userResource.resource_name.toUpperCase()}
                    </p>
                    <p className="text-2xl font-bold">
                        {userResource.quantity}
                    </p>
                </div>
            ))}

            {/* Units */}
            {userResources?.units.map((userResource) => (
                <div
                    className="mt-5 bg-light-gray rounded-lg h-16 p-2 w-40 text-center"
                    key={userResource.id}
                >
                    <p className="text-deep-red text-m font-semibold">
                        {userResource.unit_name.toUpperCase() + "S"}
                    </p>
                    <p className="text-2xl font-bold">
                        {userResource.quantity}
                    </p>
                </div>
            ))}
        </div>
    );
};
