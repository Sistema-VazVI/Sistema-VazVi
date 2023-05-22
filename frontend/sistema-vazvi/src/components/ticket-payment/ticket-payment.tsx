import './ticket-payment.css';
import React from 'react';

export interface TicketPaymentProps {
    className?: string;
}

export const TicketPayment: React.FC<TicketPaymentProps> = ({ className = '' }) => (
    <div className={`${className} paymentContainer`}>
        <h1>Ticket #</h1>
        <form className="paymentForm"><label>Cantidad a Abonar:</label><input type="number" min="0" className="paymentInput" placeholder="$ MXN" />
            <div className="paymentBtnContainer">
                <input type="reset" value="Reiniciar" className="btn btnSecondary" />
                <input type="submit" value="Aceptar" className="btn btnPrimary" />
            </div></form></div>
);
