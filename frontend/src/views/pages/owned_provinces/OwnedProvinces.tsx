import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { mapService } from "../../../api/map/map.service";
import { Dialog } from "primereact/dialog";
import { OwnedCity } from "../../../types/map.type";
import { CityDetailsForm } from "./Form/CityDetailsForm";

interface DataTableClickEvent {
    originalEvent: React.MouseEvent<HTMLTableRowElement, MouseEvent>;
    data: OwnedCity;
    index: number;
    type: string;
}

const ownedCitiesQueryKey = "ownedCities";

export const OwnedProvinces = () => {
    const [cities, setCities] = useState<OwnedCity[]>([]);
    const [selectedCity, setSelectedCity] = useState<OwnedCity | null>(null);
    const [visible, setVisible] = useState(false);

    const { refetch, isLoading, error, data } = useQuery({
        queryKey: [ownedCitiesQueryKey],
        queryFn: () => mapService.getOwnedCities(),
    });
    useEffect(() => {
        if (data) {
            setCities(data);
            console.log("Owned cities data fetched:", data);
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            console.error("Error fetching owned cities:", error);
        }
    }, [error]);
    const onRowClick = (event: DataTableClickEvent) => {
        setSelectedCity(event.data);
        setVisible(true);
    };
    const hideDialog = () => {
        setVisible(false);
        setSelectedCity(null);
    };
    const cityDialogFooter = (
        <>
            {selectedCity && (
                <CityDetailsForm
                    cityName={selectedCity.name}
                    initialCityId={selectedCity?.id}
                    onCityNameUpdated={refetch}
                />
            )}
            <button
                className="text-white bg-blue-500 hover:bg-blue-700 rounded-md px-4 py-2"
                onClick={hideDialog}
            >
                Close
            </button>
        </>
    );
    console.log(cities);
    return (
        <div className="card p-4 bg-gray-100 rounded-lg shadow-md">
            <DataTable
                value={cities}
                className="text-center text-xl border border-dark-red-orange"
                onRowClick={onRowClick}
                rowClassName={() => "cursor-pointer hover:bg-secondary-100"}
                header="My Provinces"
                stripedRows
            >
                <Column
                    className="text-center"
                    field="name"
                    header="Name"
                    headerClassName="text-deep-red !text-center"
                ></Column>
                <Column
                    field="soldier_count"
                    header="Soldiers deployed"
                    headerClassName="!text-center  ml-10"
                    className=" text-deep-red"
                ></Column>
            </DataTable>
            <Dialog
                visible={visible}
                header={selectedCity ? selectedCity.name : "City Details"}
                onHide={hideDialog}
                footer={cityDialogFooter}
                className="w-1/2 shadow-lg rounded-lg bg-white"
                headerClassName="bg-gray-200 font-bold border-b border-gray-200"
                contentClassName="p-6"
            >
                {selectedCity && (
                    <div className="leading-relaxed">
                        <p>
                            <strong className="font-semibold">Name:</strong>{" "}
                            {selectedCity.name}
                        </p>
                        <p>
                            <strong className="font-semibold">
                                Soldiers Deployed:
                            </strong>{" "}
                            {selectedCity.soldierCount}
                        </p>
                    </div>
                )}
            </Dialog>
        </div>
    );
};
