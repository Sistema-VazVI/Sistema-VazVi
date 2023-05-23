import { useForm } from 'react-hook-form';
import { IPaymentCreate } from '../../models/payment.model';
import { addPayment } from '../../controllers/payment.controller';
import './ticket-payment.css';
import React, { Dispatch, SetStateAction } from 'react';


export interface TicketPaymentProps {
    className?: string;
    ticketID: number;
    closePayment?: () => void;
}

export const TicketPayment: React.FC<TicketPaymentProps> = ({ className = '', ticketID, closePayment }) => {

    const { register, handleSubmit, formState: {errors} } = useForm<IPaymentCreate>();

    function handleCreation(data: IPaymentCreate) {
        addPayment(data);
        closePayment?.();
    }

return(
    <div className={`${className} paymentContainer`}>
        <h1>Ticket #{ticketID}</h1>
        <form className="paymentForm">
            <label>Cantidad a Abonar:</label>
                {errors.amount && <p className="error-message">{errors.amount.message}</p>}
                <input type="number" min="0" className="paymentInput" placeholder="$ MXN" 
                        {...register("amount", {required: "¡Este campo es requerido!"})}
                />
                <input
                    type="hidden"
                    value={ticketID}
                    {...register("ticket")}
                />
            <div className="paymentBtnContainer">
                <button className="btn btnSecondary" 
                        onClick={closePayment}>
                    Cerrar 
                </button>
                <button 
                    className="btn btnPrimary"
                    onClick={handleSubmit(handleCreation)}
                > 
                    Aceptar 
                </button>
            </div>
        </form>
    </div>
)};
