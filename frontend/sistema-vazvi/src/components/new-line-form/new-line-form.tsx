import { useForm } from "react-hook-form";
import { addBrand, updateBrand } from "../../controllers/brand.controller";
import IBrand, { IBrandCreate } from "../../models/brand.model";
import "./new-line-form.css";
import React from "react";

export interface NewLineFormProps {
	className?: string;
	closeModal?: () => void;
	brand: IBrand | undefined;
}

export const NewLineForm: React.FC<NewLineFormProps> = ({ className = "", closeModal,  brand}) => {

	const { register, handleSubmit, formState: {errors} } = useForm<IBrandCreate>();
	const isEditing = brand !== undefined;

	const handleFormSubmit = (data: IBrandCreate) => {
		if (isEditing) {
		  updateBrand(brand.id, data)
		} else {
		  addBrand(data); 
		}
		closeModal?.();
	  };


	return(
		<div className={`${className} containerModal`}>
			<h1>Nueva Línea</h1>
			<form className="lineForm">
				<div className="formName">
					<label>Nombre de la Línea:</label>
					{errors.name && <p className="error-message">{errors.name.message}</p>}
					<input
						type="text"
						className={`${errors.name ? "border-error" : ""}`}
						defaultValue={isEditing ? brand.name : ""}
						placeholder="Introduzca el nombre"
						{...register("name", {required: "¡Este campo es requerido!"})}
					/>
				</div>
				<div className="formBtns">
					<button
						className="btnReset"
						onClick={closeModal}
					>
						Cerrar
					</button>
					<button
						className="btnSubmit"
						onClick={handleSubmit(handleFormSubmit)}
					>
						{isEditing ? "Actualizar" : "Aceptar"} 
					</button>
				</div>
			</form>
		</div>
	)
};
