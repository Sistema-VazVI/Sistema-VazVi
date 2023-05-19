import Modal from "react-modal";
import "./app.css";
import React, { useState } from "react";
import IProduct from "../models/product.model";
import ICategory from "../models/category.model";
import IBrand from "../models/brand.model";
import { setAllProducts } from "../controllers/product.controller";
import { setAllBrands } from "../controllers/brand.controller";
import { ProductCard } from "../components/product-card/product-card";
import { NewItem } from "../components/new-item/new-item";
import { AddProductForm,  } from "../components/add-product/add-product";
import { ProductSearchBar } from "../components/product-search-bar/product-search-bar";
import { setAllCategories } from "../controllers/category.controller";



const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		transform: "translate(-50%, -50%)",
		borderRadius: 30
	},
};

function Products() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [brands, setBrands] = useState<IBrand[]>([]);
	const [product, setProduct] = useState<IProduct>({} as IProduct);
	const [brand, setBrand] = useState<number | undefined>(undefined);
	const [category, setCategory] = useState<number | undefined>(undefined);
	const [search, setSearch] = useState<string | undefined>(undefined);

	const [modalIsOpen, setIsOpen] = useState<boolean>(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
		setProduct({} as IProduct);
	}

	React.useEffect(() => {
		setAllProducts(setProducts, category, brand, search);
		setAllCategories(setCategories);
		setAllBrands(setBrands);
	}, []);
	
	React.useEffect(() => {
		setAllProducts(setProducts, category, brand, search);
	}, [category, brand, search, product]);

	
	return (
		<div>
			<div className="container">
				<h1>Inventario</h1>
				<ProductSearchBar 
					categories={categories}
					brands={brands}
					searchFilter={setSearch}
					categoryFilter={setCategory}
					brandFilter={setBrand}
				/>
				<div className="containerCards">
					<div>
						<NewItem
							openModal={openModal}
						/>
					</div>
					<Modal
						isOpen={modalIsOpen}
						onRequestClose={closeModal}
						style={customStyles}
						contentLabel="Form Modal"
					>
						<AddProductForm
							product={product} 
							brands={brands} 
							categories={categories}
							/>
					</Modal>
					{products.map((product: IProduct) => (
						<div key={product.id}>
							<ProductCard
								product={product}
								setProduct={setProduct}
								setIsOpen={setIsOpen}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Products;
