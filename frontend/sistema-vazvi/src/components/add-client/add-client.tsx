import './add-client.css';
import React from 'react';
import { BtnCancel } from '../btn-cancel/btn-cancel';
import { BtnAceptar } from '../btn-aceptar/btn-aceptar';

export interface AddClientProps {
    className?: string;
}

export const AddClient: React.FC<AddClientProps> = ({ className = '' }) => (
    <div className={`${className} ContainerAddC`}>
        <div className="divTitC">
            <h6 className="titleC">Agregar Cliente</h6>
        </div>
        <div className="div1">
            <label className="etiquetas">Nombre Del Cliente</label>
            <input className="StylesC" />
        </div>
        <div className="div1">
            <label className="etiquetas">Telefono</label>
            <input className="StylesC2" />
        </div>
        <div className="divBtn">
            <BtnCancel />
            <BtnAceptar /></div>
    </div>
);