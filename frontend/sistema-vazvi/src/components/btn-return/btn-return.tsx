import './btn-return.css';
import React from 'react';

export interface BtnReturnProps {
    className?: string;
}

export const BtnReturn: React.FC<BtnReturnProps> = ({ className = '' }) => (
    <div className={`${className} divReturn`}>
        <button className="BtnReturn">Volver</button>
    </div>
);