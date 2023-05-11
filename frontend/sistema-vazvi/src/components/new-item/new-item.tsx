import "./new-item.css";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { addProduct } from "../../controllers/product.controller";
import { IProductCreate } from "../../models/product.model";

export interface NewItemProps {
	className?: string;
	testCreate?: IProductCreate;
	openModal?: () => void;
}

export const NewItem: React.FC<NewItemProps> = ({
	className = "",
	testCreate,
	openModal
}) => (
	<div
		className={`${className} newItem`}
		// onClick={() => addProduct(testCreate!)}
		onClick={openModal}
	>
		<PlusIcon className="newIcon" />
		<h3>Nuevo Producto</h3>
	</div>
);
