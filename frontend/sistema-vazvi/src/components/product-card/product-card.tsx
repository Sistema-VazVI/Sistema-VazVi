import "./product-card.css";
import React from "react";
import { TagIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import IProduct from "../../models/product.model";

export interface ProductCardProps {
    className?: string;
    product?: IProduct;
}

export const ProductCard: React.FC<{ productProps: ProductCardProps }> = ({
    productProps: { className = "", product }
}) => (
    <div className={`${className} card`}>
        <TagIcon className="cardLogo" />
        <div className="cardInfo">
            <h6 className="cardTitle">{`${product?.name}`}</h6>
            <span>
                <p>Stock: {`${product?.stock}`} - ${`${product?.price}`}</p>
                <p>Línea: {`${product?.brand?.name}`}</p>
                <p>Categoría: {`${product?.category?.name}`}</p>
            </span>
        </div>
        <div className="cardButtons">
            <button className="cardBtn">
                <PencilSquareIcon />
            </button>
            <button className="cardBtn">
                <TrashIcon />
            </button>
        </div>
    </div>
);
