import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { mapService } from "../../../api/map/map.service";
import { CityStat } from "../../../types/map.type";
import { City } from "./City/City";

export const Map = () => {
    const mapDataQueryKey = "mapData";
    const [cities, setCities] = useState<CityStat[]>([]);
    const { refetch, isPending, error, data } = useQuery({
        queryKey: [mapDataQueryKey],
        queryFn: () => mapService.getAllCities(),
    });
    useEffect(() => {
        if (data) {
            setCities(data);
            console.log("Owned cities data fetched:", data);
        }
    }, [data]);

    if (isPending) {
        return <p className="text-center text-gray-500">Loading map data...</p>;
    }

    if (error) {
        return (
            <p className="text-center text-red-500">
                Error fetching map data: {error?.message || "Unknown error"}
            </p>
        );
    }

    return (
        <div className="grid grid-cols-10 grid-rows-10 gap-1">
            {cities?.map((city, index) => (
                <City
                    key={city.address || index}
                    {...city}
                    onCityUpdated={refetch}
                />
            ))}
        </div>
    );
};
