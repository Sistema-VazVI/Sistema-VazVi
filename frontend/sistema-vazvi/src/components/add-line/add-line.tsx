import './add-line.css';
import React from 'react';
import { BtnAceptar } from '../btn-aceptar/btn-aceptar';
import { BtnCancel } from '../btn-cancel/btn-cancel';

export interface AddLineProps {
    className?: string;
}

export const AddLine: React.FC<AddLineProps> = ({ className = '' }) => (
    <div className={`${className} ContainerLine`}>
        <div className="divTit">
            <h6 className="title">Agregar Linea</h6>
        </div>
        <div className="div1">
            <label className="etiquetas">Nombre Del Producto</label>
            <input className="Styles" />
        </div>
        <div className="divBtn">
            <BtnCancel />
            <BtnAceptar />
        </div>

    </div>
);