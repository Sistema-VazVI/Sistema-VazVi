import { useForm } from "react-hook-form";
import ICategory, { ICategoryCreate } from "../../models/category.model";
import "./new-category-form.css";
import React from "react";
import { addCategory, updateCategory } from "../../controllers/category.controller";

export interface NewCategoryFormProps {
	closeModal?: () => void;
	className?: string;
	category: ICategory | undefined;
}

export const NewCategoryForm: React.FC<NewCategoryFormProps> = ({ className = "", closeModal, category}) => {

	const { register, handleSubmit, formState: {errors} } = useForm<ICategoryCreate>();
	const isEditing = category !== undefined;

	const handleFormSubmit = (data: ICategoryCreate) => {
		if (isEditing) {
		  updateCategory(category.id, data)
		} else {
		  addCategory(data); 
		}
		closeModal?.();
	  };

return(
	<div className={`${className} containerModal`}>
		<h1>Nueva Categoría</h1>
		<form className="lineForm">
			<div className="formName">
				<label>Nombre de la Categoría:</label>
				{errors.name && <p className="error-message">{errors.name.message}</p>}
				<input
					type="text"
					className={`${errors.name ? "border-error" : ""}`}
					defaultValue={isEditing ? category.name : ""}
					placeholder="Introduzca el nombre"
					{...register("name", {required: "¡Este campo es requerido!"})}
				/>
			</div>
			<div className="formBtns">
				<button
					className="btn btnSecondary"
					onClick={closeModal}
				>
					Cerrar
				</button>
				<button
					className="btn btnPrimary"
					onClick={handleSubmit(handleFormSubmit)}
				>
					{isEditing ? "Actualizar" : "Aceptar"} 
				</button>
			</div>
		</form>
	</div>
)};


