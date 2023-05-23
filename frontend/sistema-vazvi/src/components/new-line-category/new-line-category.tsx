import "./new-line-category.css";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

export interface NewLineCategoryProps {
    className?: string;
    openModal?: () => void;
    title?: string;
}

export const NewLineCategory: React.FC<NewLineCategoryProps> = ({
    className = "",
    openModal,
    title
}) => (
    <div
        className={`${className} newLineCategory`}
        onClick={openModal}
    >
        <PlusIcon className="newIconLine" />
        <h3>Nueva {`${title}`}</h3>
    </div>
);
