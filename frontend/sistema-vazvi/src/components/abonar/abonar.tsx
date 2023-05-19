import './abonar.css';
import React from 'react';
import { BtnAceptar } from '../btn-aceptar/btn-aceptar';
import { BtnCancel } from '../btn-cancel/btn-cancel';

export interface AbonarProps {
    className?: string;
}

export const Abonar: React.FC<AbonarProps> = ({ className = '' }) => (
    <div className={`${className} ContainerAbonar`}>

        <div className="divTitA">
            <h6 className="titleA">Ticket #</h6>
        </div>
        <div className="div1A">
            <label className="etiquetaA">Cantidad a abonar</label>
            <input type="number" className="StylesA" /></div>
        <div className="divBtn">
            <BtnCancel />
            <BtnAceptar />

        </div></div>
);