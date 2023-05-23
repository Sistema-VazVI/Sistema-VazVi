import React, { useState } from "react";
import "./app.css";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import ITicket from "../models/ticket.model";
import { useNavigate, useParams } from "react-router-dom";
import IClient from "../models/client.model";
import  Ticket  from "../components/ticket/ticket";
import { getSingleClient } from "../controllers/client.controller";
import IClientDetail from '../models/client.model';
import { ToastContainer } from "react-toastify";


function ClientTickets() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [client, setClient] = useState<IClientDetail>({} as IClientDetail);

	React.useEffect(() => {
		getSingleClient(id ? parseInt(id, 10) : 0, setClient);
	}, []);

	React.useEffect(() => {
		getSingleClient(id ? parseInt(id, 10) : 0, setClient);
	}, [client]);

	return (
		<div>
			<div className="container">
				<h1>
					<ChevronLeftIcon
						onClick={() => navigate(-1)}
						className="backBtn"
					/>{" "}
					{/* {`${client?.name}`} */}
					holaaa
				</h1>
				<div className="subtitleBox">
					<h3>Saldo:{`${client.debt?.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}`}</h3>
					{/* <select
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
					</select> */}
				</div>
				<div className="containerCards">
					{client.tickets?.map((ticket: ITicket) => (
						<div key={ticket.id}>
							<Ticket 
								ticket={ticket}
							/>
						</div>
					))}
				</div>
			</div>
			<ToastContainer 
				position="top-center"
				theme="colored"
			/>
		</div>
	);
}

export default ClientTickets;
