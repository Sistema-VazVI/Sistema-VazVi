import "./lineCat.css";
import React, { Dispatch, SetStateAction } from "react";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import IBrand from "../../models/brand.model";
import { hardDeleteBrand, viewBrand } from "../../controllers/brand.controller";

export interface LineProps {
    className?: string;
    brand: IBrand;
	setBrand: Dispatch<SetStateAction<IBrand | undefined>>;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Line: React.FC<LineProps> = ({ className = "", brand, setBrand, setIsOpen }) => (
    <div className={`${className} cardLineCat`}>
        <div className="cardLogo">
            <ListBulletIcon />
        </div>
        <div className="Titulo">{`${brand?.name}`}</div>
        <div className="btnContainerLineCat">
            <button className="btnLineCat" onClick={() => viewBrand(brand, setBrand, setIsOpen)}>
                <PencilSquareIcon />
            </button>
            <button className="btnLineCat" onClick={() => hardDeleteBrand(brand!)}>
                <TrashIcon />
            </button>
        </div>
    </div>
);
