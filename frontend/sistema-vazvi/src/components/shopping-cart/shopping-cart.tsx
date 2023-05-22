import "./shopping-cart.css";
import React, { Dispatch, SetStateAction } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"
import IShoppingCart from '../../models/shopping-cart.model';

export interface ShoppingCartProps {
	className?: string;
	openModal?: () => void;
    setShoppingCart: Dispatch<SetStateAction<IShoppingCart[]>>;
	shoppingCart: IShoppingCart[];
}


export const ShoppingCart: React.FC<ShoppingCartProps> = ({ className = '', openModal, setShoppingCart, shoppingCart}) => {
    
    const removeFromCart = (itemId: number) => {
        setShoppingCart(shoppingCart.filter((item) => item.product.id !== itemId));
    };
    
    const calculateTotal = () => {
        return shoppingCart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    };
   
    return(
        <div className={`${className} cartContainer`}>
            <h2>Carrito de Compra</h2>
            <hr />
            <div className="cartScroll">
                {shoppingCart.map((item: IShoppingCart) => (
						<div>
                            <div className="cartItemContainer">
                                <h6 className="itemTitle">{item.product.name}</h6>
                                <p className="itemText">Cantidad: {item.quantity} Total: {(item.quantity * item.product.price)?.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}</p>
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
                <p><span>Total: </span> {calculateTotal().toLocaleString("es-MX", { style: "currency", currency: "MXN" })} </p>
                <hr />
                <button className="finishBtn" onClick={openModal}>Terminar Venta</button>
            </div>
        </div>
    )
};
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
