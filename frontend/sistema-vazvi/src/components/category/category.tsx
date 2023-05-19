import "../line/lineCat.css";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import ICategory from "../../models/category.model";
import { hardDeleteCategory, viewCategory } from "../../controllers/category.endpoint";
export interface CategoryProps {
	className?: string;
	category?: ICategory;
	setCategory?: any;
}

export const Category: React.FC<CategoryProps> = ({ className = "", category, setCategory }) => (
	<div className={`${className} cardLineCat`}>
		<div className="cardLogo">
			<BookmarkIcon />
		</div>
		<div className="Titulo">{`${category?.name}`}</div>
		<div className="btnContainer">
			<button className="btn" onClick={()=>viewCategory(category!, setCategory)}>
				<PencilSquareIcon />
			</button>
			<button className="btn" onClick={() => hardDeleteCategory(category!)}>
				<TrashIcon />
			</button>
		</div>
	</div>
);
