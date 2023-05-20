import "../line/lineCat.css";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import React, { Dispatch, SetStateAction } from "react";
import ICategory from "../../models/category.model";
import { hardDeleteCategory, viewCategory } from "../../controllers/category.controller";
export interface CategoryProps {
	className?: string;
	category: ICategory;
	setCategory: Dispatch<SetStateAction<ICategory | undefined>>;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Category: React.FC<CategoryProps> = ({ className = "", category, setCategory, setIsOpen}) => (
	<div className={`${className} cardLineCat`}>
		<div className="cardLogo">
			<BookmarkIcon />
		</div>
		<div className="Titulo">{`${category?.name}`}</div>
		<div className="btnContainer">
			<button className="btn" onClick={()=>viewCategory(category, setCategory, setIsOpen)}>
				<PencilSquareIcon />
			</button>
			<button className="btn" onClick={() => hardDeleteCategory(category!)}>
				<TrashIcon />
			</button>
		</div>
	</div>
);
