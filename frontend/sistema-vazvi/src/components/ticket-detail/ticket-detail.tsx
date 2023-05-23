import './ticket-detail.css';
import React from 'react';

export interface TicketDetailProps {
    className?: string;
}

export const TicketDetail: React.FC<TicketDetailProps> = ({ className = '' }) => (
    <div className={`${className} detail-container`}>
        <h1>Ticket # </h1>
        <hr />
        <div className="cartScroll">
            <div>
                <div className="cartItemContainer">
                    <h6 className="itemTitle">Nombre del Producto</h6>
                    <p className="itemText">Cantidad: 1 Total: $1200.00</p>
                </div>
                <hr />
            </div>
            <div>
                <div className="cartItemContainer">
                    <h6 className="itemTitle">Nombre del Producto</h6>
                    <p className="itemText">Cantidad: 1 Total: $1200.00</p>
                </div>
                <hr />
            </div>
        </div>
        <div className="cartFooter">
            <p>
                <span>Total: </span> $12000.00
            </p>
            <hr />
        </div>
    </div>
);
