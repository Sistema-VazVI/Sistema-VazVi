export default interface IPayment{

    id: number;
    amount: number;
    ticket: number;
}

export interface IPaymentCreate{

    amount: number;
    ticket: number;
    
}
