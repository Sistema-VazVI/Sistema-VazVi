/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import "./app.css";
import Modal from "react-modal";
import IProduct from "../models/product.model";
import { setAllProducts } from "../controllers/product.controller";
import { ShoppingCart } from "../components/shopping-cart/shopping-cart";
import { SaleCard } from "../components/sale-card/sale-card";
import { ProductSearchBar } from "../components/product-search-bar/product-search-bar";
import { Cliente } from "../components/cliente/cliente";
import { Plazos } from "../components/plazos/plazos";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

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

function Sales() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [modalIsOpen, setIsOpen] = useState(false);
	const [confirmation, setConfirmation] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	function openConfirmation() {
		setConfirmation(true);
	}

	function closeConfirmation() {
		setConfirmation(false);
	}

	React.useEffect(() => {
		setAllProducts(setProducts);
	}, [products]);

	return (
		<div>
			<div className="container">
				<h1>Venta</h1>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Form Modal"
				>
					<div className="confirmationModal">
						<h1>¿Terminar la venta?</h1>

						<div className="confirmationBtns">
							<button
								className="btn btnSecondary"
								onClick={closeModal}
							>
								Volver
							</button>
							<button
								className="btn btnPrimary"
								onClick={() => {
									closeModal();
									openConfirmation();
								}}
							>
								Terminar
							</button>
						</div>
					</div>
				</Modal>

				<Modal
					isOpen={confirmation}
					onRequestClose={closeConfirmation}
					style={customStyles}
					contentLabel="Confirmation Modal"
				>
					<div className="confirmationModal">
						<h1>
							<CheckCircleIcon className="confirmationLogo" /> ¡La venta fue registrada!
						</h1>

						<div className="confirmationBtns">
							<Link
								to="/clients"
								className="btn btnSecondary"
								onClick={closeConfirmation}
							>
								Terminar
							</Link>
							<Link
								to="/clients"
								className="btn btnPrimary"
								onClick={closeConfirmation}
							>
								Abonar
							</Link>
						</div>
					</div>
				</Modal>
				<div className="grid">
					<div className="column">
						<Cliente />
						<Plazos />
					</div>
					<div className="col2">
						<div>
							<ProductSearchBar />
							<div className="containerCardsSales">
								{products.map((product: IProduct) => (
									<div key={product.id}>
										<SaleCard product={product} />
									</div>
								))}
							</div>
						</div>
						<div>
							<ShoppingCart openModal={openModal} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sales;
