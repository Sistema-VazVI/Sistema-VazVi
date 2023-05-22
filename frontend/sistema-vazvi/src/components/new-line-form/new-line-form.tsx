import "./new-line-form.css";
import React from "react";

export interface NewLineFormProps {
	className?: string;
}

export const NewLineForm: React.FC<NewLineFormProps> = ({ className = "" }) => (
	<div className={`${className} containerModal`}>
		<h1>Nueva Línea</h1>
		<form className="lineForm">
			<div className="formName">
				<label>Nombre de la Línea:</label>
				<input
					type="text"
					name="lineName"
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
