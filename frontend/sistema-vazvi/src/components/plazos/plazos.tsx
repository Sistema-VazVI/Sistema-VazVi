import './plazos.css';
import React from 'react';

export interface PlazosProps {
    className?: string;
}

export const Plazos: React.FC<PlazosProps> = ({ className = '' }) => (
    <div className={`${className} divPlazos`}>Plazos:<select className="stylePlazos"><option>plazos</option></select>
    </div>
);