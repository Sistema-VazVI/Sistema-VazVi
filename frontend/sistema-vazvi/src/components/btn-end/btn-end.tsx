import './btn-end.css';
import React from 'react';

export interface BtnEndProps {
    className?: string;
}

export const BtnEnd: React.FC<BtnEndProps> = ({ className = '' }) => (
    <div className={`${className} divEnd`}>
        <button className="BtnEndS">Terminar</button>
    </div>
);