import './login.css';
import React from 'react';

export interface LoginProps {
    className?: string;
}

export const Login: React.FC<LoginProps> = ({ className = '' }) => (
    <div className={`${className} divConForm`}>
        <form className="form">
            <h2 className="titleForm">Inicia sesión</h2>
            <label className="etiquetasForm">Usuario:</label>

            <input type="text" className="inputForm" /><br /><label className="etiquetasForm">Contraseña:</label><br /><input type="text" className="inputForm" /><br /><br />
            <br />
            <input type="submit" value="Login" className="btnLogin" /></form>
    </div>
);