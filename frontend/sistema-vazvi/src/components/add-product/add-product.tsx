import "./add-product.css";
import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { addProduct } from "../../controllers/product.controller";
import { IProductCreate } from "../../models/product.model";
import { Form } from "react-router-dom";

export interface AddProductProps {
	className?: string;
	closeModal?: () => void;
    product?: IProductCreate;
}

export async function newProduct(product: IProductCreate){

}

export const AddProductForm: React.FC<AddProductProps> = ({ className = "", closeModal, product }) => (
	<div className={`${className} Container`}>
		<div className="divTit">
			<h1 className="title">Añadir Producto</h1>
		</div>
		<form method="post" action="/">
			<div className="nameForm">
				<label className="etiquetas" >Nombre Del Producto</label>
				<input
					type="text"
                    name="productName"
					className="inputLG"
					placeholder="Introduzca el nombre del producto"
				/>
			</div>
			<div className="twoClmnForm">
				<div className="divCol">
					<label className="etiquetas">Categoría</label>
					<select
						defaultValue=""
						className="mdForm"
                        name="category"
					>
						<option
							hidden
							value=""
						>
							Categoria
						</option>
						<option value={4}>Opcion 1</option>
					</select>
				</div>
				<div className="divCol">
					<label className="etiquetas">Línea</label>
					<select
						defaultValue=""
						className="mdForm"
                        name="line"
					>
						<option
							hidden
							value=""
						>
							Linea
						</option>
						<option value={2}>Opcion 1</option>
					</select>
				</div>
			</div>
            <input type="hidden" value="1"/>
			<div className="twoClmnForm">
				<div className="divCol">
					<label className="etiquetas">Precio</label>
					<input
						type="number"
                        name="price"
						className="mdForm"
						placeholder="$ MXN"
					/>
				</div>
				<div className="divCol">
					<label className="etiquetas">Stock</label>
					<input
						type="number"
                        name="stock"
						className="mdForm"
						placeholder="No. productos en stock"
					/>
				</div>
			</div>
			<div className="btnFormContainer">
				<input
					type="reset"
					className="btnCancel"
					value="Reiniciar"
				/>
				<input
					type="submit"
					value="Aceptar"
					className="btnAccept"
				/>
			</div>
		</form>
	</div>
);
