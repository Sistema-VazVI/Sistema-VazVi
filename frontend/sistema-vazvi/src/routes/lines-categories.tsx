import React, { useState } from "react";
import "./app.css";
import Modal from "react-modal";
import { NewItem } from "../components/new-item/new-item";
import { NewLineForm } from "../components/new-line-form/new-line-form";

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

function LinesCategories() {
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
				<h1>Líneas y Categorías</h1>
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
						<NewLineForm/>
					</Modal>
				</div>
			</div>
		</div>
	);
}

export default LinesCategories;
