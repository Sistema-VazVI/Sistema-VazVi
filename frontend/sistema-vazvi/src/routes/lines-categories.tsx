import React, { useState } from "react";
import "./app.css";
import Modal from "react-modal";
import { NewLineForm } from "../components/new-line-form/new-line-form";
import { NewLineCategory } from "../components/new-line-category/new-line-category";
import { NewCategoryForm } from "../components/new-category-form/new-category-form";
import { Category } from "../components/category/category";
import { Line } from "../components/line/line";
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

function LinesCategories() {
	const [modalIsOpenCat, setIsOpenCat] = useState(false);
	const [modalIsOpenLine, setIsOpenLine] = useState(false);

	function openModalCat() {
		setIsOpenCat(true);
	}

	function closeModalCat() {
		setIsOpenCat(false);
	}

	function openModalLine() {
		setIsOpenLine(true);
	}

	function closeModalLine() {
		setIsOpenLine(false);
	}

	return (
		<div>
			<div className="container">
				<h1>Líneas y Categorías</h1>
				<Modal
					isOpen={modalIsOpenLine}
					onRequestClose={closeModalLine}
					style={customStyles}
					contentLabel="Form Modal"
				>
					<XCircleIcon
						className="closeIcon"
						onClick={closeModalLine}
					/>
					<NewLineForm />
				</Modal>
				<Modal
					isOpen={modalIsOpenCat}
					onRequestClose={closeModalCat}
					style={customStyles}
					contentLabel="Form Modal"
				>
					<XCircleIcon
						className="closeIcon"
						onClick={closeModalCat}
					/>
					<NewCategoryForm />
				</Modal>
				<div className="lineCatContainer">
					<div className="lineCatCardsContainer">
						<NewLineCategory
							openModal={openModalCat}
							title="Categoría"
						/>
						<Category />
					</div>

					<div className="lineCatCardsContainer">
						<NewLineCategory
							openModal={openModalLine}
							title="Línea"
						/>
						<Line />
					</div>
				</div>
			</div>
		</div>
	);
}

export default LinesCategories;
