import './add-product.css';
import React from 'react';
import { BtnCancel } from '../btn-cancel/btn-cancel';
import { BtnAceptar } from '../btn-aceptar/btn-aceptar';

export interface AddProductProps {
    className?: string;
}

export const AddProductForm: React.FC<AddProductProps> = ({ className = '' }) => (
    <div className={`${className} Container`}>
        <div className="divTit">
            <h6 className="title">Agregar  producto </h6>
        </div>
        <div className="div1">
            <label className="etiquetas">Nombre Del Producto</label>
            <input className="Styles" />
        </div>
        <div className="div1">
            <div className="div2">
                <label className="etiquetas">Categoría</label>
                <select className="Styles2"><option>Categoria</option></select></div>
            <div className="div2">
                <label className="etiquetas">Línea</label>
                <select className="Styles2"><option>Línea</option></select>
            </div></div>
        <div className="div1">
            <div className="div2">
                <label className="etiquetas">Precio</label>
                <input className="Styles2 Styles" /></div>
            <div className="div2">
                <label className="etiquetas">Stock</label>
                <input type="number" className="Styles Styles2" /></div>
        </div>
        <div className="div1">
            <div className="DivAccCan">
                <BtnCancel /></div>
            <div className="DivAccCan">
                <BtnAceptar />
            </div></div></div>
);
