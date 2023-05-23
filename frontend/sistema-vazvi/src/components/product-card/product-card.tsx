import "./product-card.css";
import React, { Dispatch, SetStateAction } from "react";
import { TagIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import IProduct from "../../models/product.model";
import { hardDeleteProduct, softDeleteProduct, viewProduct } from "../../controllers/product.controller";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface ProductCardProps {
	className?: string;
	product: IProduct;
	setProduct: Dispatch<SetStateAction<IProduct | undefined>>;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ProductCard: React.FC<ProductCardProps> = ({ className = "", product, setProduct, setIsOpen }) => (
	<div className={`${className} card`}>
		<div className="cardLogoProduct">
			<TagIcon />
		</div>
		<div className="cardInfo">
			<h6 className="cardTitle">{`${product?.name}`}</h6>
			<span>
				<p>Precio: {product.price?.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</p>
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
				onClick={() => softDeleteProduct(product)}
			>
				<TrashIcon />
			</button>
		</div>
	</div>
);
