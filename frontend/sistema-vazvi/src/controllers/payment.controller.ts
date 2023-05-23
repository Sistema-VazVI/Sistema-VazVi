import { toast } from "react-toastify";
import { create } from "../endpoints/payment.endpoint";
import { IPaymentCreate } from "../models/payment.model";

export function addPayment(payment: IPaymentCreate){
    create(payment)
    .then(() => {
      toast.success('Abono registrado exitosamente en el ticket #' + payment.ticket);
    })
    .catch(error => {
      toast.error('Error al registrar el abono en en el ticket #' + payment.ticket, error);
    });
  
  }
  