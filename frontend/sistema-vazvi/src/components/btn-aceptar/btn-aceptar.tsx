import './btn-aceptar.css';
import React from 'react';

export interface BtnAceptarProps {
    className?: string;
}

export const BtnAceptar: React.FC<BtnAceptarProps> = ({ className = '' }) => (
    <div className={className}><button className="Btn">Aceptar</button>
    </div>
);