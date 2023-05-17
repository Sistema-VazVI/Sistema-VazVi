import "./line.css";
import React from "react";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

export interface LineProps {
    className?: string;
}

export const Line: React.FC<LineProps> = ({ className = "" }) => (
    <div className={`${className} card`}>
        <div className="cardLogo">
            <ListBulletIcon />
        </div>
        <div className="Titulo">Linea / Categoria</div>
        <div className="Botones">
            <button className="btn">
                <PencilSquareIcon />
            </button>
            <button className="btn">
                <TrashIcon />
            </button>
        </div>
    </div>
);
