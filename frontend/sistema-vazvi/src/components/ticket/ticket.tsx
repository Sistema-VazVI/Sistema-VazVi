import "./ticket.css";
import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
import ITicket from "../../models/ticket.model";

export interface TicketProps {
    className?: string;
    ticket?: ITicket;
    setTicket?: any;
}

export const Ticket: React.FC<TicketProps> = ({ className = "", ticket, setTicket }) => (
    <div className={`${className} CardTicket`}>
        <Icon
            icon="ic:outline-receipt-long"
            className="ticketI"
        />
        <div className="DataTick">
            <h6 className="TitleT">Ticket #{`${ticket?.id}`}</h6>
            <span className="InfoTicket">
                <p>Fecha: DD-MM-YYYY</p>
                <p>Total: ${`${ticket?.total}`}</p>
                <p>Abonado: $500.00</p>
                <p>Restante: $1000.00</p>
            </span>
        </div>
        <div className="divRight">
            {ticket?.is_payed ? (
                <div className="estadoTicket pagado">Pagado</div>
            ) : (
                <div className="estadoTicket pendiente">Pendiente</div>
            )}
            <div className="CardButtonsT">
                <button className="cardBtnT">
                    <EyeIcon />
                </button>
                <button className="cardBtnT">
                    <Icon
                        icon="mingcute:pig-money-line"
                        width="25"
                        height="25"
                    />
                </button>
            </div>
        </div>
    </div>
);
