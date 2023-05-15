import "./product-search-bar.css";
import React from "react";

export interface ProductSearchBarProps {
	className?: string;
}

export const ProductSearchBar: React.FC<ProductSearchBarProps> = ({ className = "" }) => (
	<div className={`${className} searchContainer`}>
		<label>
			<svg
				viewBox="0 0 24 24"
				width="20"
				height="20"
				stroke="currentColor"
				strokeWidth="1.5"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="css-i6dzq1"
			>
				<circle
					cx="11"
					cy="11"
					r="8"
				></circle>
				<line
					x1="21"
					y1="21"
					x2="16.65"
					y2="16.65"
				></line>
			</svg>
			<input
				placeholder="Buscar Producto"
				type="search"
			/>
		</label>
		<select
			defaultValue=""
			className="searchSelect"
		>
			<option
				hidden
				value=""
			>
				Línea
			</option>
			<option>Opcion 1</option>
			<option>Opcion 2</option>
			<option>Opcion 3</option>
		</select>
		<select
			defaultValue=""
			className="searchSelect"
		>
			<option
				hidden
				value=""
			>
				Categoría
			</option>
			<option>Opcion 1</option>
			<option>Opcion 2</option>
			<option>Opcion 3</option>
		</select>
	</div>
);
