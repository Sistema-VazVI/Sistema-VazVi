import "./sale-card.css";
import React, { useState } from "react";
import { FaPumpSoap } from "react-icons/fa";
import { ShoppingCartIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import IProduct from "../../models/product.model";
import IShoppingCart from "../../models/shopping-cart.model";
import { Dispatch, SetStateAction } from 'react';

export interface SaleCardProps {
	className?: string;
	product: IProduct;
	setShoppingCart: Dispatch<SetStateAction<IShoppingCart[]>>;
	shoppingCart: IShoppingCart[];

}

export const SaleCard: React.FC<SaleCardProps> = ({ className = "", product, setShoppingCart, shoppingCart }) => {

	const addToCart = (product: IProduct, quantity: number) => {

		if (quantity > 0 || quantity >= product.stock) {
			var item: IShoppingCart = {
				product: product,
				quantity: quantity
			}

			setShoppingCart([...shoppingCart, item]);
		}

	};

	const [quantity, setQuantity] = useState<number>(0)


	return(
		<div className={`${className} saleCard`}>
			<div className="saleLogo">
				<FaPumpSoap />
			</div>
			<div className="info">
				<h6 className="title">{`${product?.name}`}</h6>
				<span>
					<p className="text">
						Stock: {`${product?.stock}`} - ${`${product?.price}`}
					</p>
					<p className="text">
						{`${product?.brand?.name}`} - {`${product?.category?.name}`}
					</p>
				</span>
			</div>
			<div className="btnContainerSales">
				<div className="quantity">
					<input
						type="number" 
						className="numberQt"
						min="1"
						placeholder="0"
						onChange={(e) => setQuantity(Number(e.target.value))}
					/>
				</div>
				<ShoppingCartIcon 
					className="btnSale" 
					onClick={() => addToCart(product, quantity)}		
				/>
			</div>
		</div>
	)};
