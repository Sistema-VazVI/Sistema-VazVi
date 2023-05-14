
import React, { useState } from "react";
import IProduct, {
	IProductCreate,
	IProductUpdate,
} from "./models/product.model";
import { setAllProducts, addProduct } from "./controllers/product.controller";
import { ProductCard } from "./components/product-card/product-card";
import { NewItem } from "./components/new-item/new-item";
import { SideBar } from "./components/side-bar/side-bar";
import "./app.css";
import { ProductSearchBar } from "./components/product-search-bar/product-search-bar"; 

function App() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [product, setProduct] = useState<IProduct>({} as IProduct);

	const testCreate: IProductCreate = {
		name: "testCreate 3",
		price: 100,
		stock: 1,
		is_active: true,
		category: 4,
		brand: 2,
	};

	React.useEffect(() => {
		setAllProducts(setProducts);
	}, [products]);

	return (
		<div>
			<SideBar />
			<div className="container">
				<h1>Inventario</h1>
				<ProductSearchBar />
				<div className="containerCards">
					<div>
						<NewItem testCreate={testCreate} />
					</div>
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
