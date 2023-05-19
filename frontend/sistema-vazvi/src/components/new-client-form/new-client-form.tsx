import "./new-client-form.css";
import React from "react";

export interface NewClientFormProps {
    className?: string;
}

export const NewClientForm: React.FC<NewClientFormProps> = ({ className = "" }) => (
    <div className={`${className} containerModal`}>
        <h1>Agregar Cliente</h1>
        <form className="clientForm">
            <div className="formName">
                <label>Nombre del Cliente</label>
                <input
                    type="text"
                    name="clientName"
                    placeholder="Nombre Completo"
                    inputMode="text"
                />
            </div>
            <div className="formInput formPhone">
                <label>Teléfono</label>
                <input type="tel" name="clientPhone" placeholder="Num. de teléfono" />
            </div>
            <div className="formBtns">
                <input
                    type="reset"
                    value="Reiniciar"
                    className="btnReset"
                />
                <input
                    type="submit"
                    value="Aceptar"
                    className="btnSubmit"
                />
            </div>
        </form>
    </div>
);
