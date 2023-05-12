import "./add-product.css";
import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
export interface AddProductProps {
	className?: string;
	closeModal?: () => void;
}

export const AddProductForm: React.FC<AddProductProps> = ({ className = "", closeModal }) => (
	<div className={`${className} Container`}>
		<div className="divTit">
			<div
				className="closeIcon"
				onClick={closeModal}
			>
				<XCircleIcon onClick={closeModal}/>
			</div>
			<h1 className="title">Añadir Producto</h1>
		</div>
		<form method="post">
			<div className="nameForm">
				<label className="etiquetas">Nombre Del Producto</label>
				<input
					type="text"
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
					>
						<option
							hidden
							value=""
						>
							Categoria
						</option>
						<option>Opcion 1</option>
					</select>
				</div>
				<div className="divCol">
					<label className="etiquetas">Línea</label>
					<select
						defaultValue=""
						className="mdForm"
					>
						<option
							hidden
							value=""
						>
							Linea
						</option>
						<option>Opcion 1</option>
					</select>
				</div>
			</div>
			<div className="twoClmnForm">
				<div className="divCol">
					<label className="etiquetas">Precio</label>
					<input
						type="number"
						className="mdForm"
						placeholder="$ MXN"
					/>
				</div>
				<div className="divCol">
					<label className="etiquetas">Stock</label>
					<input
						type="number"
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
