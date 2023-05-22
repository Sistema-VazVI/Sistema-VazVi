import { Dispatch, SetStateAction } from 'react';
import { getAll, getSingle, create, update, remove } from '../endpoints/ticket.endpoint';
import ITicket, {ITicketCreate, ITicketUpdate} from '../models/ticket.model';
import { IitemTicketCreate } from '../models/item-ticket.model';
import IShoppingCart from '../models/shopping-cart.model';
import { additemTicket } from './item-ticket.controller';

type SetTicketsType = Dispatch<SetStateAction<ITicket[]>>;
type SetTicketType = Dispatch<SetStateAction<ITicket>>;

export function setAllTickets(setTickets: SetTicketsType) {
    getAll().then((data) => {
        if (data) {
          setTickets(data);
        }
      });
}

export function viewTicket(ticket: ITicket, setTicket: SetTicketType){
    setTicket(ticket);
}

export async function addTicket(ticket: ITicketCreate, items:IShoppingCart[]){
    
  const newTicket = await create(ticket);
  const itemTickets: IitemTicketCreate[] = items.map(cart => convertToItemTicket(newTicket?.id, cart));

  for (const item of itemTickets) {
    additemTicket(item);
  }

}

function convertToItemTicket(id:number | undefined, cart: IShoppingCart): IitemTicketCreate {
    const itemTicket: IitemTicketCreate = {
      ticket: id,
      product: cart.product.id,
      quantity: cart.quantity,
    };

    return itemTicket;
  }

