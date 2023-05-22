import "./new-category-form.css";
import React from "react";

export interface NewCategoryFormProps {
	className?: string;
}

export const NewCategoryForm: React.FC<NewCategoryFormProps> = ({ className = "" }) => (
	<div className={`${className} containerModal`}>
		<h1>Nueva Categoría</h1>
		<form className="lineForm">
			<div className="formName">
				<label>Nombre de la Categoría:</label>
				<input
					type="text"
					name="categoryName"
					placeholder="Introduzca el nombre"
				/>
			</div>
			<div className="formBtns">
				<input
					type="reset"
					value="Reiniciar"
					className="btn btnSecondary"
				/>
				<input
					type="submit"
					value="Submit"
					className="btn btnPrimary"
				/>
			</div>
		</form>
	</div>
);
