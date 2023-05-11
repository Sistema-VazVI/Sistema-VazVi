import "./add-product.css";
import React from "react";
import { BtnCancel } from "../btn-cancel/btn-cancel";
import { BtnAceptar } from "../btn-aceptar/btn-aceptar";

export interface AddProductProps {
	className?: string;
}

export const AddProductForm: React.FC<AddProductProps> = ({ className = "" }) => (
	<div className={`${className} Container`}>
		<div className="divTit">
			<h6 className="title">Agregar producto </h6>
		</div>
		<div className="nameForm">
			<label className="etiquetas">Nombre Del Producto</label>
			<input className="inputLG" />
		</div>
		<div className="twoClmnForm">
			<div className="divCol">
				<label className="etiquetas">Categoría</label>
				<select className="mdForm">
					<option>Categoria</option>
				</select>
			</div>
			<div className="divCol">
				<label className="etiquetas">Línea</label>
				<select className="mdForm">
					<option>Línea</option>
				</select>
			</div>
		</div>
		<div className="twoClmnForm">
			<div className="divCol">
				<label className="etiquetas">Precio</label>
				<input
					type="number"
					className="mdForm"
				/>
			</div>
			<div className="divCol">
				<label className="etiquetas">Stock</label>
				<input
					type="number"
					className="mdForm"
				/>
			</div>
		</div>
		<div className="btnForm">
			<BtnCancel />
			<BtnAceptar />
		</div>
	</div>
);
