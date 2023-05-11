import './btn-abonar.css';
import React from 'react';

export interface BtnAbonarProps {
    className?: string;
}

export const BtnAbonar: React.FC<BtnAbonarProps> = ({ className = '' }) => (
    <div className={`${className} divAbonar`}><button className="BtnAbonar">Abonar</button></div>
);