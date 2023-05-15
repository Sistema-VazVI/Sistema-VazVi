import React, { useState } from "react";
import "./app.css";
import Modal from "react-modal";
import { ClientCard } from "../components/client-card/client-card";
import { NewItem } from "../components/new-item/new-item";
import { NewClientForm } from "../components/new-client-form/new-client-form";

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
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			<div className="container">
				<h1>Clientes</h1>
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
						<NewClientForm/>
					</Modal>
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
				</div>
			</div>
		</div>
	);
}

export default Clients;
