import React, { useState } from "react";
import "./app.css";
import Modal from "react-modal";
import { ClientCard } from "../components/client-card/client-card";
import { NewItem } from "../components/new-item/new-item";
import { NewClientForm } from "../components/new-client-form/new-client-form";
import { ClientSearch } from "../components/client-search/client-search";
import { XCircleIcon } from "@heroicons/react/24/outline";

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
				<ClientSearch/>
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
						<XCircleIcon className="closeIcon" onClick={closeModal}/>
						<NewClientForm/>
					</Modal>
					<ClientCard />
				</div>
			</div>
		</div>
	);
}

export default Clients;
