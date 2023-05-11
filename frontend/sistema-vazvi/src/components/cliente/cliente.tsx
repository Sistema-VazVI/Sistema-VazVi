import './cliente.css';
import React from 'react';

export interface ClienteProps {
    className?: string;
}

export const Cliente: React.FC<ClienteProps> = ({ className = '' }) => (
    <div className={`${className} divCliente`}>Cliente:<select className="styles3"><option>cliente</option></select>
    </div>
);