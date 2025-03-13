import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { mapService } from "../../../api/map/map.service";
import { Dialog } from "primereact/dialog";
import { OwnedProvince } from "../../../types/map.type";
import { ProvinceDetailsForm } from "./Form/ProvinceDetailsForm";

interface DataTableClickEvent {
    originalEvent: React.MouseEvent<HTMLTableRowElement, MouseEvent>;
    data: OwnedProvince;
    index: number;
    type: string;
}

const ownedCitiesQueryKey = "ownedCities";

export const OwnedProvinces = () => {
    const [selectedProvince, setSelectedProvince] =
        useState<OwnedProvince | null>(null);
    const [dialogVisible, setdialogVisible] = useState(false);

    const {
        data: cities = [],
        refetch,
        isLoading,
        error,
    } = useQuery({
        queryKey: [ownedCitiesQueryKey],
        queryFn: () => mapService.getOwnedCities(),
    });

    const handleRowClick = (event: DataTableClickEvent) => {
        setSelectedProvince(event.data);
        setdialogVisible(true);
    };
    const handleDialogClose = () => {
        setdialogVisible(false);
        setSelectedProvince(null);
    };
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-32">
                <h1>Loading</h1>
            </div>
        );
    }
    if (error) {
        return (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg border border-red-200">
                Error loading provinces: {(error as Error).message}
            </div>
        );
    }

    const cityDialogFooter = (
        <>
            {selectedProvince && (
                <ProvinceDetailsForm
                    provinceName={selectedProvince.name}
                    initialProvinceId={selectedProvince?.id}
                    onCityNameUpdated={refetch}
                />
            )}
        </>
    );
    return (
        <div className="mt-10 rounded-lg border text-light-gray bg-midnight-blue shadow-sm">
            <DataTable
                value={cities}
                dataKey="id"
                loading={isLoading}
                emptyMessage="No provinces under your control"
                onRowClick={handleRowClick}
                rowClassName={() => "cursor-pointer hover:bg-secondary-100"}
                className="text-lg"
                header={
                    <div className="  text-center px-4 py-3 rounded-t-lg bg-midnight-blue border-b">
                        <h3 className="font-semibold text-light-gray text-xl">
                            My Provinces
                        </h3>
                    </div>
                }
            >
                <Column
                    field="name"
                    header="Name"
                    sortable
                    headerClassName="text-light-gray px-4 py-3"
                    bodyClassName="px-4 py-2"
                ></Column>
                <Column
                    field="soldier_count"
                    header="Soldiers deployed"
                    sortable
                    headerClassName="text-light-gray px-4 py-3"
                    bodyClassName="px-4 py-2"
                ></Column>
            </DataTable>
            <Dialog
                visible={dialogVisible}
                header={selectedProvince?.name || "Province Details"}
                onHide={handleDialogClose}
                footer={cityDialogFooter}
                className="w-full max-w-xl bg-charcoal-black rounded-lg overflow-hidden"
                dismissableMask
                headerClassName="overflow-hidden pl-5 text-xl text-light-gray bg-dark-green font-bold border-gray-200 rounded-t-lg [&_.p-dialog-header-icon]:text-xl [&_.p-dialog-header-icon]:w-10 [&_.p-dialog-header-icon]:h-10 [&_.p-dialog-header-icon]:bg-dark-red-orange [&_.p-dialog-header-icon]:hover:bg-olive-green"
                contentClassName="p-6"
            ></Dialog>
        </div>
    );
};
