import './line.css';
import { TagIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from 'react';

export interface CategoryProps {
    className?: string;
}

export const Category: React.FC<CategoryProps> = ({ className = '' }) => (
    <div className={`${className} Categoria`}>
        <div className="btnizq"><button className="btnizq bntizq1">
            <TagIcon />
        </button></div>Categoria 1<div className="botones">
            <button className="btn">
              <PencilSquareIcon/>
            </button>
            <button className="btn">
              <TrashIcon/>
            </button>
        </div>
    </div>
);
