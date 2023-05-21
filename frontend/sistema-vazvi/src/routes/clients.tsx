import React, { useState } from "react";
import "./app.css";
import Modal from "react-modal";
import { ClientCard } from "../components/client-card/client-card";
import { NewItem } from "../components/new-item/new-item";
import { NewClientForm } from "../components/new-client-form/new-client-form";
import { ClientSearch } from "../components/client-search/client-search";
import { XCircleIcon } from "@heroicons/react/24/outline";
import IClient, { IClientCreate, IClientUpdate } from "../models/client.model";
import { setAllClients, addClient } from "../controllers/client.controller";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		transform: "translate(-50%, -50%)",
		borderRadius: 30,
	},
};

function Clients() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [clients, setClients] = useState<IClient[]>([]);
	const [client, setClient] = useState<IClient>({} as IClient);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	React.useEffect(() => {
		setAllClients(setClients);
	}, [clients]);

	return (
		<div>
			<div className="container">
				<h1>Clientes</h1>
				<ClientSearch />
				<div className="containerCards">
					<div>
						<NewItem openModal={openModal} />
					</div>
					<Modal
						isOpen={modalIsOpen}
						onRequestClose={closeModal}
						style={customStyles}
						contentLabel="Form Modal"
					>
						<XCircleIcon
							className="closeIcon"
							onClick={closeModal}
						/>
						<NewClientForm />
					</Modal>
					{clients.map((cl: IClient) => (
						<div key={cl.id}>
							<ClientCard
								client={cl}
								setClient={setClient}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Clients;
