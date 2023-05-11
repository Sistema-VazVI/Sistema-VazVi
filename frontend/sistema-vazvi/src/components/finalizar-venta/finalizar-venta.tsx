import './finalizar-venta.css';
import React from 'react';
import { BtnEnd } from '../btn-end/btn-end';
import { BtnReturn } from '../btn-return/btn-return';

export interface FinalizarVentaProps {
    className?: string;
}

export const FinalizarVenta: React.FC<FinalizarVentaProps> = ({ className = '' }) => (
    <div className={`${className} ContainerEndSales`}>
        <div className="divTitES">
            <h6 className="titleEs">¿Terminar la venta?</h6>
        </div>
        <div className="divBtn">
            <BtnReturn />
            <BtnEnd /></div></div>
);