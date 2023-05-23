import "./sale-card.css";
import React from "react";
import { FaPumpSoap } from "react-icons/fa";
import { ShoppingCartIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import IProduct from "../../models/product.model";

export interface SaleCardProps {
	className?: string;
	product?: IProduct;
}

export const SaleCard: React.FC<SaleCardProps> = ({ className = "", product }) => (
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
			<PlusIcon className="btnSale" />
			<div className="quantity">
				<p className="numberQt">1</p>
			</div>
			<MinusIcon className="btnSale" />
		</div>
	</div>
);
