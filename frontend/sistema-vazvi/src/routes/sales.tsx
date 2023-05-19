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

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
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
				></Modal>
				<div className="grid">
					<div className="column">
						<Cliente />
						<Plazos />
					</div>
					<div className="column">
						<ProductSearchBar />
						<div className="containerCardsSales">
							{products.map((product: IProduct) => (
								<div key={product.id}>
									<SaleCard
										product={product}
									/>
								</div>
							))}
						</div>
					</div>
					<div className="column">
						<ShoppingCart />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sales;
