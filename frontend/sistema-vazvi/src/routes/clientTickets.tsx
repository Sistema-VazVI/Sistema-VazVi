import React from "react";
import "./app.css";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import ITicket from "../models/ticket.model";
import { useNavigate } from "react-router-dom";
import IClient from "../models/client.model";
import  Ticket  from "../components/ticket/ticket";

function ClientTickets() {
	const navigate = useNavigate();

	// React.useEffect(() => {
	// 	setAllTickets(setTickets);
	// }, [clients]);

	return (
		<div>
			<div className="container">
				<h1>
					<ChevronLeftIcon
						onClick={() => navigate(-1)}
						className="backBtn"
					/>{" "}
					Nombre del cliente
				</h1>
				<div className="subtitleBox">
					<h3>Saldo: $1230.00</h3>
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
					<Ticket/>
					{/* {clients.map((cl: IClient) => (
						<div key={cl.id}>
							<ClientCard
								client={cl}
								setClient={setClient}
							/>
						</div>
					))} */}
				</div>
			</div>
		</div>
	);
}

export default ClientTickets;
