import "./shopping-cart.css";
import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"

export interface ShoppingCartProps {
	className?: string;
	openModal?: () => void;
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ className = "", openModal }) => (
	<div className={`${className} cartContainer`}>
		<h1>Carrito de Compra</h1>
		<hr />
		<div className="cartScroll">
			<div>
				<div className="cartItemContainer">
					<h6 className="itemTitle">Nombre del Producto</h6>
					<p className="itemText">Cantidad: 1 Total: $1200.00</p>
					<TrashIcon className="trashBtn" />
				</div>
				<hr />
			</div>
			<div>
				<div className="cartItemContainer">
					<h6 className="itemTitle">Nombre del Producto</h6>
					<p className="itemText">Cantidad: 1 Total: $1200.00</p>
					<TrashIcon className="trashBtn" />
				</div>
				<hr />
			</div>
		</div>
		<div className="cartFooter">
			<p>
				<span>Total: </span> $12000.00
			</p>
			<hr />
			<button
				className="btn btnPrimary"
				onClick={openModal}
			>
				Terminar Venta
			</button>
		</div>
	</div>
);
