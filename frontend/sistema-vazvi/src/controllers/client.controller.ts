import { Dispatch, SetStateAction } from 'react';
import { getAll, getSingle, create, update, remove } from '../endpoints/client.endpoint';
import IClient, {IClientCreate, IClientUpdate} from '../models/client.model';

type SetClientsType = Dispatch<SetStateAction<IClient[]>>;
type SetClientType = Dispatch<SetStateAction<IClient | undefined>>;
type setModalOpen = Dispatch<SetStateAction<boolean>>;

export function setAllClients(setClients: SetClientsType, searchFilter: string | undefined) {
    getAll(searchFilter).then((data) => {
        if (data) {
          setClients(data);
        }
      });
}

export function viewClient(client: IClient, setClient: SetClientType, openModal:setModalOpen){
    setClient(client);
    openModal(true);
}

export function addClient(client: IClientCreate){
  create(client);
}

export function hardDeleteClient(client: IClient) {
  remove(client);
} 

export function updateClient(id: number, client: IClientCreate) {

  const updatedClient: IClientUpdate = {
    id: id,
    name: client.name,
    phone: client.phone,
  }

  update(updatedClient);
}



