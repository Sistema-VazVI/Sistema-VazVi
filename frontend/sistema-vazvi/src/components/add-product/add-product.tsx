import "./add-product.css";
import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { addProduct, updateProduct } from "../../controllers/product.controller";
import IProduct, { IProductCreate } from "../../models/product.model";
import ICategory from "../../models/category.model";
import IBrand from "../../models/brand.model";
import { useForm } from "react-hook-form";

export interface AddProductProps {
	className?: string;
	closeModal?: () => void;
    product: IProduct | undefined;
	categories: ICategory[];
	brands: IBrand[];
}

export const AddProductForm: React.FC<AddProductProps> = ({ className = "", closeModal, product, categories, brands}) => {
	
	const { register, handleSubmit, formState: {errors} } = useForm<IProductCreate>();
	const isEditing = product !== undefined;

	const handleFormSubmit = (data: IProductCreate) => {
		if (isEditing) {
		  updateProduct(product.id, data)
		} else {
		  addProduct(data); 
		}
		closeModal?.();
	  };

	return(
		<div className={`${className} Container`}>
			<div className="divTit">
				<div
					className="closeIcon"
					onClick={closeModal}
				>
					<XMarkIcon onClick={closeModal}/>
				</div>
				<h1 className="title">Añadir Producto </h1>
			</div>
			<form >
				<div className="nameForm">
					<label className="etiquetas" >Nombre Del Producto </label>
					{errors.name && <p className="error-message">{errors.name.message}</p>}
					<input
						type="text"
						className={`inputLG ${errors.name ? "border-error" : ""}`}
						defaultValue={isEditing ? product.name : ""}
						placeholder="Introduzca el nombre del producto"
						{...register("name", {required: "¡Este campo es requerido!"})}
					/>
				</div>
				<div className="twoClmnForm">
					<div className="divCol">
						<label className="etiquetas">Categoría</label>
						{errors.name && <p className="error-message">{errors.name.message}</p>}
						<select
							defaultValue={isEditing ? product.category?.id : ""}
							className={`mdForm ${errors.name ? "border-error" : ""}`}
							{...register("category", {required: "¡Este campo es requerido!"})}
						>
							<option
								hidden
								value=""
							>
								Categoria
							</option>
							{categories.map((category: ICategory) => (
								<option 
									value={category.id}
									selected={isEditing && product.category?.id === category.id}
								>
									{category.name}
								</option>
							))}
						</select>
					</div>
					<div className="divCol">
						<label className="etiquetas">Línea</label>
						{errors.name && <p className="error-message">{errors.name.message}</p>}
						<select
							defaultValue={isEditing ? product.brand?.id : ""}
							className={`mdForm ${errors.name ? "border-error" : ""}`}
							{...register("brand", {required: "¡Este campo es requerido!"})}
						>
							<option
								hidden
								value=""
							>
								Linea
							</option>
							{brands.map((brand: IBrand) => (
								<option 
									value={brand.id}
									selected={isEditing && product.brand?.id === brand.id}
								>
									{brand.name}
								</option>
							))}
						</select>
					</div>
				</div>
				<input type="hidden" value="1"/>
				<div className="twoClmnForm">
					<div className="divCol">
						<label className="etiquetas">Precio</label>
						{errors.name && <p className="error-message">{errors.name.message}</p>}
						<input
							type="number"
							className={`mdForm ${errors.name ? "border-error" : ""}`}
							defaultValue={isEditing ? product.price : ""}
							placeholder="$ MXN"
							{...register("price", {required: "¡Este campo es requerido!"})}
						/>
					</div>
					<div className="divCol">
						<label className="etiquetas">Stock</label>
						{errors.name && <p className="error-message">{errors.name.message}</p>}
						<input
							type="number"
							className={`mdForm ${errors.name ? "border-error" : ""}`}
							defaultValue={isEditing ? product.stock : ""}
							placeholder="No. productos en stock"
							{...register("stock", {required: "¡Este campo es requerido!"})}
						/>
					</div>
				</div>
				<div className="btnFormContainer">
					<button
						className="btnCancel"
						onClick={closeModal}
					>
						Cerrar
					</button>
					<button className="btnAccept" 
							onClick={handleSubmit(handleFormSubmit)}
					> 
						{isEditing ? "Actualizar" : "Aceptar"} 
					</button>
				</div>
			</form>
		</div>
	);
};
