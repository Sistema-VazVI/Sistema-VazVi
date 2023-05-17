import "./new-line-category.css";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

export interface NewLineCategoryProps {
    className?: string;
    openModal?: () => void;
}

export const NewLineCategory: React.FC<NewLineCategoryProps> = ({
    className = "",
    openModal
}) => (
    <div
        className={`${className} newLineCategory`}
        onClick={openModal}
    >
        <PlusIcon className="newIcon" />
        <h3>Agregar nuevo</h3>
    </div>
);
