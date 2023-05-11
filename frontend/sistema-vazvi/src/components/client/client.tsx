import './client.css';
import React from 'react';
import { UserIcon } from "@heroicons/react/24/outline";
import {EyeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

export interface ClientProps {
    className?: string;
}

export const Client: React.FC<ClientProps> = ({ className = '' }) => (
    <div className={`${className} CardClient`}>
        <UserIcon className="ClientLogo" />
        <div className="Data">
            <h6 className="Title">Cliente 1</h6>
            <span className="InfoClient">
                <p>Telefono: 444 120 1234</p>
                <p>Saldo: $1500.00</p>
            </span></div>
        <div className="CardButtons">
            <button className="cardBtn">
                <EyeIcon/>
            </button>
            <button className="cardBtn">
                <PencilSquareIcon />
            </button>
            <button className="cardBtn">
                <TrashIcon/>
            </button>
        </div></div>
);