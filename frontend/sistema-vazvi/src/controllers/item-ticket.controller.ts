import { Dispatch, SetStateAction } from 'react';
import { getAll, getSingle, create, update, remove } from '../endpoints/item-ticket.endpoint';
import IitemTicket, {IitemTicketCreate, IitemTicketUpdate} from '../models/item-ticket.model';

type SetitemTicketsType = Dispatch<SetStateAction<IitemTicket[]>>;
type SetitemTicketType = Dispatch<SetStateAction<IitemTicket>>;

export function setAllitemTickets(setitemTickets: SetitemTicketsType) {
    getAll().then((data) => {
        if (data) {
          setitemTickets(data);
        }
      });
}

export function viewitemTicket(itemTicket: IitemTicket, setitemTicket: SetitemTicketType){
    setitemTicket(itemTicket);
    console.log(itemTicket);
}

export function additemTicket(itemTicket: IitemTicketCreate){
    create(itemTicket);
}

export function hardDeleteitemTicket(itemTicket: IitemTicket) {
  remove(itemTicket);
} 

// export function updateitemTicket(itemTicket: IitemTicket, option:boolean) {

//   const updateditemTicket: IitemTicketUpdate = {
//     id: itemTicket.id,
//     name: itemTicket.name,
//     price: itemTicket.price,
//     stock: itemTicket.stock,
//     category: itemTicket.category.id,
//     itemTicket: itemTicket.itemTicket.id,
//     is_active: item-ticket.is_active,
//   }

//   if(option){//Enters if its a soft delete
//     updateditemTicket.is_active = 0;
//   }

//   update(updateditemTicket);
// }



