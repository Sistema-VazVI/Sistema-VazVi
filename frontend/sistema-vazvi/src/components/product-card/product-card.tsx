import "./product-card.css";
import React, { Dispatch, SetStateAction } from "react";
import { TagIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import IProduct from "../../models/product.model";
import { hardDeleteProduct, viewProduct } from "../../controllers/product.controller";

export interface ProductCardProps {
	className?: string;
	product: IProduct;
	setProduct: Dispatch<SetStateAction<IProduct>>;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ProductCard: React.FC<ProductCardProps> = ({ className = "", product, setProduct, setIsOpen }) => (
	<div className={`${className} card`}>
		<div className="cardLogo">
			<TagIcon />
		</div>
		<div className="cardInfo">
			<h6 className="cardTitle">{`${product?.name}`}</h6>
			<span>
				<p> ${`${product.price}`}</p>
				<p>Stock: {`${product.stock}`}</p>
				<p>Línea: {`${product.brand.name}`}</p>
				<p>Categoría: {`${product.category.name}`}</p>
			</span>
		</div>
		<div className="cardButtons">
			<button
				className="cardBtn"
				onClick={() => viewProduct(product, setProduct, setIsOpen)}
			>
				<PencilSquareIcon />
			</button>
			<button
				className="cardBtn"
				onClick={() => hardDeleteProduct(product)}
			>
				<TrashIcon />
			</button>
		</div>
		{/* <button onClick={() => viewProduct(product, setProduct) }> view product </button>{" "}
          <button onClick={() => updateProduct(product, true)}> soft delete </button>{" "}
          <button onClick={() => hardDeleteProduct(product)}> delete </button>{" "} */}
	</div>
);
