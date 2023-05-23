import React, { useState } from "react";
import "./app.css";
import Modal from "react-modal";
import { ClientCard } from "../components/client-card/client-card";
import { NewItem } from "../components/new-item/new-item";
import { NewClientForm } from "../components/new-client-form/new-client-form";
import { ClientSearch } from "../components/client-search/client-search";
import { XMarkIcon } from "@heroicons/react/24/outline";
import IClient from "../models/client.model";
import { setAllClients } from "../controllers/client.controller";
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		transform: "translate(-50%, -50%)",
		borderRadius: 30,
	},
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.8)",
	},
};

function Clients() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [clients, setClients] = useState<IClient[]>([] as IClient[]);
	const [client, setClient] = useState<IClient | undefined>(undefined);
	const [search, setSearch] = useState<string | undefined>(undefined);
	const navigate = useNavigate();

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
		setClient(undefined);
	}

	React.useEffect(() => {
		setAllClients(setClients, search);
	}, []);

	React.useEffect(() => {
		setAllClients(setClients, search);
	}, [clients, search]);

	return (
		<div>
			<div className="container">
				<h1>Clientes</h1>
				<ClientSearch 
					searchFilter={setSearch}
				/>
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
						<XMarkIcon
							className="closeIcon"
							onClick={closeModal}
						/>
						<NewClientForm 
							closeModal={closeModal}
							client={client}
						/>
					</Modal>
					{clients.map((cl: IClient) => (
						<div key={cl.id}>
							<ClientCard
								client={cl}
								setClient={setClient}
								openModal={setIsOpen}
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

export default Clients;
