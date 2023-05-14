import { Dispatch, SetStateAction } from 'react';
import { getAll, getSingle, create, update, remove } from '../endpoints/client.endpoint';
import IClient, {IClientCreate, IClientUpdate} from '../models/client.model';

type SetClientsType = Dispatch<SetStateAction<IClient[]>>;
type SetClientType = Dispatch<SetStateAction<IClient>>;

export function setAllClients(setClients: SetClientsType) {
    getAll().then((data) => {
        if (data) {
          setClients(data);
        }
      });
}

export function viewClient(client: IClient, setClient: SetClientType){
    setClient(client);
    console.log(client);
}

export function addClient(client: IClientCreate){
    create(client);
}

export function hardDeleteClient(client: IClient) {
  remove(client);
} 

// export function updateClient(client: IClient, option:boolean) {

//   const updatedClient: IClientUpdate = {
//     id: client.id,
//     name: client.name,
//     price: client.price,
//     stock: client.stock,
//     category: client.category.id,
//     client: client.client.id,
//     is_active: client.is_active,
//   }

//   if(option){//Enters if its a soft delete
//     updatedClient.is_active = 0;
//   }

//   update(updatedClient);
// }



