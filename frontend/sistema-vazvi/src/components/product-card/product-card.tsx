import './product-card.css';
import React from 'react';
import { TagIcon } from '@heroicons/react/24/outline';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'

export interface ProductCardProps {
    className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ className = '' }) => (
    <div className={`${className} card`}>
        <TagIcon className="cardLogo" />
        <div className="cardInfo">
            <h4 className="cardTitle">Producto</h4>
            <span>
                <p>Stock: 50 - $10,000</p>
                <p>Línea: Línea 1</p>
                <p>Categoría: Categoría 1</p>
            </span>
        </div>
        <div className="cardButtons">
            <button className="cardBtn"><PencilSquareIcon/></button>
            <button className="cardBtn"><TrashIcon/></button>
        </div></div>
);
