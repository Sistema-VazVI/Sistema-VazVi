import IClient from "../../models/client.model";
import "./cliente.css";
import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface ClienteProps {
  className?: string;
  clients: IClient[];
  setClient: Dispatch<SetStateAction<number>>;
}

export const Cliente: React.FC<ClienteProps> = ({
  className = "",
  clients,
  setClient
}) => {

  const handleClientChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedClientId = event.target.value;
    setClient(parseInt(selectedClientId));
  }

  return(
    <div className={`${className} divCliente`}>
      Cliente:
      <select 
        className="styles3"
        onChange={handleClientChange}
      >
        <option hidden value="">
          Cliente
        </option>
        {clients.map((client: IClient) => (
          <option
            value={client.id}
          >
            {client.name}
          </option>
        ))}
      </select>
    </div>
  )};
