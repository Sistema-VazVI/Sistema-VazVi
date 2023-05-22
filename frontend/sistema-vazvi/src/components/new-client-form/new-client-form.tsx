import { useForm } from "react-hook-form";
import { addClient, updateClient } from "../../controllers/client.controller";
import IClient, { IClientCreate } from "../../models/client.model";
import "./new-client-form.css";
import React from "react";

export interface NewClientFormProps {
    className?: string;
    closeModal?: () => void;
	client: IClient | undefined;
}

export const NewClientForm: React.FC<NewClientFormProps> = ({ className = "", closeModal, client}) => {

    const { register, handleSubmit, formState: {errors} } = useForm<IClientCreate>();
	const isEditing = client !== undefined;

	const handleFormSubmit = (data: IClientCreate) => {
		if (isEditing) {
		  updateClient(client.id, data)
		} else {
		  addClient(data); 
		}
		closeModal?.();
	  };

return(
    <div className={`${className} containerModal`}>
        <h1>Agregar Cliente</h1>
        <form className="clientForm">
            <div className="formName">
                <label>Nombre del Cliente</label>
                {errors.name && <p className="error-message">{errors.name.message}</p>}
                <input
                    type="text"
                    placeholder="Nombre Completo"
                    defaultValue={isEditing ? client.name : ""}
                    className={`${errors.name ? "border-error" : ""}`}
                    {...register("name", {required: "¡Este campo es requerido!"})}
                />
            </div>
            <div className="formInput formPhone">
                <label>Teléfono</label>
                {errors.phone && <p className="error-message">{errors.phone.message}</p>}
                <input type="tel" 
                    placeholder="Num. de teléfono" 
                    defaultValue={isEditing ? client.phone : ""}
                    className={`${errors.phone ? "border-error" : ""}`}
                    {...register("phone", {required: "¡Este campo es requerido!"})}
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
)};
