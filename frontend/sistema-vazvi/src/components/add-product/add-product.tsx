import "./add-product.css";
import React from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { addProduct } from "../../controllers/product.controller";
import { IProductCreate } from "../../models/product.model";
import ICategory from "../../models/category.model";
import IBrand from "../../models/brand.model";
import { useForm } from "react-hook-form";

export interface AddProductProps {
	className?: string;
	closeModal?: () => void;
    product?: IProductCreate;
	categories: ICategory[];
	brands: IBrand[];
}

export const AddProductForm: React.FC<AddProductProps> = ({ className = "", closeModal, product, categories, brands}) => {
	
	const { register, handleSubmit } = useForm<IProductCreate>();

	return(
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
			<form >
				<div className="nameForm">
					<label className="etiquetas" >Nombre Del Producto</label>
					<input
						type="text"
						className="inputLG"
						placeholder="Introduzca el nombre del producto"
						{...register("name", {required: true})}
					/>
				</div>
				<div className="twoClmnForm">
					<div className="divCol">
						<label className="etiquetas">Categoría</label>
						<select
							defaultValue=""
							className="mdForm"
							{...register("category", {required: true})}
						>
							<option
								hidden
								value=""
							>
								Categoria
							</option>
							{categories.map((category: ICategory) => (
								<option value={category.id}>{category.name}</option>
							))}
						</select>
					</div>
					<div className="divCol">
						<label className="etiquetas">Línea</label>
						<select
							defaultValue=""
							className="mdForm"
							{...register("brand", {required: true})}
						>
							<option
								hidden
								value=""
							>
								Linea
							</option>
							{brands.map((brand: IBrand) => (
								<option value={brand.id}>{brand.name}</option>
							))}
						</select>
					</div>
				</div>
				<input type="hidden" value="1"/>
				<div className="twoClmnForm">
					<div className="divCol">
						<label className="etiquetas">Precio</label>
						<input
							type="number"
							className="mdForm"
							placeholder="$ MXN"
							{...register("price", {required: true})}
						/>
					</div>
					<div className="divCol">
						<label className="etiquetas">Stock</label>
						<input
							type="number"
							className="mdForm"
							placeholder="No. productos en stock"
							{...register("stock", {required: true})}
						/>
					</div>
				</div>
				<div className="btnFormContainer">
					<input
						type="reset"
						className="btnCancel"
						value="Reiniciar"
					/>
					<button className="btnAccept" onClick={handleSubmit(addProduct)}> Aceptar</button>
				</div>
			</form>
		</div>
	);
};
