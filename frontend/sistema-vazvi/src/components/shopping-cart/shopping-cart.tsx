import "./shopping-cart.css";
import React, { Dispatch, SetStateAction } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import IShoppingCart from "../../models/shopping-cart.model";

export interface ShoppingCartProps {
	className?: string;
	openModal?: () => void;
	setShoppingCart: Dispatch<SetStateAction<IShoppingCart[]>>;
	shoppingCart: IShoppingCart[];
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({
	className = "",
	openModal,
	setShoppingCart,
	shoppingCart,
}) => {
	const removeFromCart = (itemId: number) => {
		setShoppingCart(shoppingCart.filter((item) => item.product.id !== itemId));
	};

	const calculateTotal = () => {
		return shoppingCart.reduce((total, item) => total + item.product.price * item.quantity, 0);
	};

	return (
		<div className={`${className} cartContainer`}>
			<h2>Carrito de Compra</h2>
			<hr />
			<div className="cartScroll">
				{shoppingCart.map((item: IShoppingCart) => (
					<div>
						<div className="shoppingCartItemContainer">
							<div className="cartItemTextContainer">
								<h6 className="cartItemTitle">{item.product.name}</h6>
								<p className="cartItemText">Cantidad: {item.quantity}</p>
								<p className="cartItemText">
									{" "}
									Total:{" "}
									{(item.quantity * item.product.price)?.toLocaleString("es-MX", {
										style: "currency",
										currency: "MXN",
									})}
								</p>
							</div>
							<TrashIcon
								className="trashBtn"
								onClick={() => removeFromCart(item.product.id)}
							/>
						</div>
						<hr />
					</div>
				))}
			</div>
			<div className="cartFooter">
				<p>
					<span>Total: </span>{" "}
					{calculateTotal().toLocaleString("es-MX", { style: "currency", currency: "MXN" })}{" "}
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
};
