import React, { useState } from "react";
import IProduct, { IProductCreate, IProductUpdate } from "./models/product.model";
import { setAllProducts, addProduct } from "./controllers/product.controller";
import { ProductCard } from "./components/product-card/product-card";
import { NewItem } from "./components/new-item/new-item";
import { AddProductForm } from "./components/add-product/add-product";
import "./app.css";
import { ProductSearchBar } from "./components/product-search-bar/product-search-bar";
import Modal from "react-modal";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
	},
};

function App() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [product, setProduct] = useState<IProduct>({} as IProduct);
	const [modalIsOpen, setIsOpen] = React.useState(false);

	let subtitle: any;

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {
		// references are now sync'd and can be accessed.
		subtitle.style.color = "#f00";
	}

	function closeModal() {
		setIsOpen(false);
	}

	const testCreate: IProductCreate = {
		name: "testCreate 3",
		price: 100,
		stock: 1,
		is_active: 1,
		category: 4,
		brand: 2,
	};

	React.useEffect(() => {
		setAllProducts(setProducts);
	}, [products]);

	return (
		<div>
			<div className="container">
				<h1>Inventario</h1>
				<ProductSearchBar />
				<div className="containerCards">
					<div>
						<NewItem
							testCreate={testCreate}
							openModal={openModal}
						/>
					</div>
					<Modal
						isOpen={modalIsOpen}
						onAfterOpen={afterOpenModal}
						onRequestClose={closeModal}
						style={customStyles}
						contentLabel="Example Modal"
					>
						<AddProductForm/>
					</Modal>
					{products.map((product: IProduct) => (
						<div key={product.id}>
							<ProductCard
								product={product}
								setProduct={setProduct}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
