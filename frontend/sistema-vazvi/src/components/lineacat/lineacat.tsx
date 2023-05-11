import './lineacat.css';
import React from 'react';
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

export interface LineacatProps {
    className?: string;
}

export const Lineacat: React.FC<LineacatProps> = ({ className = '' }) => (
    <div className={`${className} linea`}>
        <div className="btnizq">
            <button className="bntizq2">
                < ListBulletIcon />
            </button></div>Linea 1<div className="Botones">
            <button className="btn">
                < PencilSquareIcon />
            </button>
            <button className="btn">
                <TrashIcon />
            </button>

        </div>
    </div>
);