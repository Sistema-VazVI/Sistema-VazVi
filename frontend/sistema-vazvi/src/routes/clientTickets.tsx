import React, { useState } from "react";
import "./app.css";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import ITicket from "../models/ticket.model";
import { useNavigate, useParams } from "react-router-dom";
import IClient from "../models/client.model";
import  Ticket  from "../components/ticket/ticket";
import { getSingleClient } from "../controllers/client.controller";
import IClientDetail from '../models/client.model';


function ClientTickets() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [client, setClient] = useState<IClientDetail>({} as IClientDetail);

	React.useEffect(() => {
		getSingleClient(id ? parseInt(id, 10) : 0, setClient);
		console.log(client);
	}, []);

	return (
		<div>
			<div className="container">
				<h1>
					<ChevronLeftIcon
						onClick={() => navigate(-1)}
						className="backBtn"
					/>{" "}
					{`${client?.name}`}
				</h1>
				<div className="subtitleBox">
					<h3>Saldo:{`${client.debt?.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}`}</h3>
					<select
						defaultValue=""
						className="selectTicket"
					>
						<option
							hidden
							value=""
						>
							Estado del Ticket
						</option>
						<option>Pagado</option>
						<option>Pendiente</option>
					</select>
				</div>
				<div className="containerCards">
					{/* {client.tickets.map((ticket: ITicket) => (
						<div key={ticket.id}>
							<Ticket 
								ticket={ticket}
							/>
						</div>
					))} */}
				</div>
			</div>
		</div>
	);
}

export default ClientTickets;
