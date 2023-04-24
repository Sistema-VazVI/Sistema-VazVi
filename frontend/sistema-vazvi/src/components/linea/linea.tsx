import './linea.css';
import React from 'react';

export interface LineaProps {
    className?: string;
}

export const Linea: React.FC<LineaProps> = ({ className = '' }) => (
    <div className={`${className} LineCategory botones`}>
        <div className="botonizq">utton>
  boton">
                <TrashIcon />
            </button>
            <button className="boton">
                <PencilSquareIcon />
            </button>
        </div>
        <h6></h6></div>
);