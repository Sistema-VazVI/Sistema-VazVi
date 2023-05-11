import './btn-aceptar.css';
import React from 'react';

export interface BtnAceptarProps {
    className?: string;
}

export const BtnAceptar: React.FC<BtnAceptarProps> = ({ className = '' }) => (
    <div className={`${className} divAcept`}><button className="BtnAcep">Aceptar</button>
    </div>
);