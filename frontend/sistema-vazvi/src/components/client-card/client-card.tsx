import './client-card.css';
import React from 'react';
import { UserIcon } from "@heroicons/react/24/outline";
import { EyeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

export interface ClientCardProps {
    className?: string;
}

export const ClientCard: React.FC<ClientCardProps> = ({ className = '' }) => (
    <div className={`${className} CardClient`}>
        <UserIcon className="ClientLogo" />
        <div className="Data">
            <h5 className="Title">Jose maria sebastian Rodriguez zavala</h5>
            <span className="InfoClient">
                <p>Telefono:</p>
                <p>444 123 1234</p>
                <p>Saldo: $1500.00</p>
            </span></div>
        <div className="CardButtons">
            <button className="cardBtn">
                <EyeIcon />
            </button>
            <button className="cardBtn">
                <PencilSquareIcon />
            </button>
            <button className="cardBtn">
                <TrashIcon />
            </button>
        </div></div>
);
