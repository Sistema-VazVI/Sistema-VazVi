import './ticket.css';
import React from 'react';
import { TicketIcon, EyeIcon, BanknotesIcon } from "@heroicons/react/24/solid";


export interface TicketProps {
    className?: string;
}

export const Ticket: React.FC<TicketProps> = ({ className = '' }) => (
    <div className={`${className} CardTicket`}>

        <TicketIcon className="ticketI"></TicketIcon>
        <div className="DataTick">
            <h6 className="TitleT">Ticket 1</h6>
            <span className="InfoTicket">
                <p>Fecha: 18-05-2023</p>
                <br />
                <p>Total: $1500.00</p>
                <br />

                <p>Abonado: $500.00</p>
                <br />
                <p>Restante: $1000.00</p>
            </span>
        </div>
        <div className="CardButtonsT">
            <button className="cardBtnT">
                <EyeIcon />
            </button>
            <button className="cardBtnT">
                <BanknotesIcon />
            </button>
        </div>
        <div className="EstadoTic">Pendiente</div>
    </div>
);