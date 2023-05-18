import "../line/lineCat.css";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";

export interface CategoryProps {
    className?: string;
}

export const Category: React.FC<CategoryProps> = ({ className = "" }) => (
    <div className={`${className} cardLineCat`}>
        <div className="cardLogo">
            <BookmarkIcon />
        </div>
        <div className="Titulo">Categoria</div>
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
