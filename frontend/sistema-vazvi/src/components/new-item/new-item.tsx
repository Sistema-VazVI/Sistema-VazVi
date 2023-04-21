import './new-item.css';
import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

export interface NewItemProps {
    className?: string;
}

export const NewItem: React.FC<NewItemProps> = ({ className = '' }) => (
    <div className={`${className} newItem`}>
        <PlusIcon className="newIcon" />
        <h3>Nuevo Producto</h3></div>
);
