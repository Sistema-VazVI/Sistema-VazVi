import "./lineCat.css";
import React from "react";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

export interface LineProps {
    className?: string;
}

export const Line: React.FC<LineProps> = ({ className = "" }) => (
    <div className={`${className} cardLineCat`}>
        <div className="cardLogo">
            <ListBulletIcon />
        </div>
        <div className="Titulo">Acondicionador Acondicionador</div>
        <div className="btnContainer">
            <button className="btn">
                <PencilSquareIcon />
            </button>
            <button className="btn">
                <TrashIcon />
            </button>
        </div>
    </div>
);
