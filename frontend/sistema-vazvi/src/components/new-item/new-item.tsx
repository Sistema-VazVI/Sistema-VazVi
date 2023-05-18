import "./new-item.css";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { IProductCreate } from "../../models/product.model";

export interface NewItemProps {
    className?: string;
    testCreate?: IProductCreate;
    openModal?: () => void;
}

export const NewItem: React.FC<NewItemProps> = ({
    className = "",
    openModal
}) => (
    <div
        className={`${className} newItem`}
        onClick={openModal}
    >
        <PlusIcon className="newIcon" />
        <h3>Agregar nuevo</h3>
    </div>
);
