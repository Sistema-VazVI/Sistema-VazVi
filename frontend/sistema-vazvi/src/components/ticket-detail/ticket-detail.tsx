import IitemTicket from '../../models/item-ticket.model';
import IProduct from '../../models/product.model';
import './ticket-detail.css';
import React from 'react';

export interface TicketDetailProps {
    className?: string;
    items: IitemTicket[];
    total: number;
    ticketID: number;
}

export const TicketDetail: React.FC<TicketDetailProps> = ({ className = '', ticketID, items, total}) => (
    <div className={`${className} detail-container`}>
        <h1>Ticket #{ticketID}</h1>
        <hr />
        <p className='itemTitle'>
            Productos:
        </p>
            <div className="cartScroll">
                <hr />
                {items.map((item: IitemTicket) => (
                    <div className="cartItemContainer">

                        <div className="itemTitleContainer">
                            <h6 className="itemTitle">{item.product.name}</h6>
                        </div>
                        <div className="itemDetailContainer">
                            <p className="itemText">Cantidad: {item.quantity}</p>
                            <p className="itemText"> Total:{`${(item.quantity * item.product.price).toLocaleString("es-MX", { style: "currency", currency: "MXN" })}`} </p>
                        </div>
                        <hr />
                    </div>
				))}
            </div>
            <div className="cartFooter">
                <p>
                        <span>Total: </span> {`${(total).toLocaleString("es-MX", { style: "currency", currency: "MXN" })}`}
                </p>
                <hr />
            </div>              
    </div>
);
