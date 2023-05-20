import React, { useState } from "react";
import "./app.css";
import Modal from "react-modal";
import { NewLineForm } from "../components/new-line-form/new-line-form";
import { NewLineCategory } from "../components/new-line-category/new-line-category";
import { NewCategoryForm } from "../components/new-category-form/new-category-form";
import { Category } from "../components/category/category";
import { Line } from "../components/line/line";
import { XCircleIcon } from "@heroicons/react/24/outline";
import IBrand, { IBrandCreate, IBrandUpdate } from "../models/brand.model";
import { setAllBrands, addBrand } from "../controllers/brand.controller";
import ICategory, { ICategoryCreate, ICategoryUpdate } from "../models/category.model";
import { setAllCategorys, addCategory } from "../controllers/category.endpoint";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		transform: "translate(-50%, -50%)",
		borderRadius: 30,
	},
};

function LinesCategories() {
	const [modalIsOpenCat, setIsOpenCat] = useState(false);
	const [modalIsOpenLine, setIsOpenLine] = useState(false);
	const [brands, setBrands] = useState<IBrand[]>([]);
	const [brand, setBrand] = useState<IBrand>({} as IBrand);
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [category, setCategory] = useState<ICategory>({} as ICategory);

	function openModalCat() {
		setIsOpenCat(true);
	}

	function closeModalCat() {
		setIsOpenCat(false);
	}

	function openModalLine() {
		setIsOpenLine(true);
	}

	function closeModalLine() {
		setIsOpenLine(false);
	}

	React.useEffect(() => {
		setAllBrands(setBrands);
		setAllCategorys(setCategories);
	}, [brands, categories]);

	return (
		<div>
			<div className="container">
				<h1>Líneas y Categorías</h1>
				<Modal
					isOpen={modalIsOpenLine}
					onRequestClose={closeModalLine}
					style={customStyles}
					contentLabel="Form Modal"
				>
					<XCircleIcon
						className="closeIcon"
						onClick={closeModalLine}
					/>
					<NewLineForm />
				</Modal>
				<Modal
					isOpen={modalIsOpenCat}
					onRequestClose={closeModalCat}
					style={customStyles}
					contentLabel="Form Modal"
				>
					<XCircleIcon
						className="closeIcon"
						onClick={closeModalCat}
					/>
					<NewCategoryForm />
				</Modal>
				<div className="lineCatContainer">
					<div className="lineCatCardsContainer">
						<NewLineCategory
							openModal={openModalCat}
							title="Categoría"
						/>
						{categories.map((cat: ICategory) => (
							<div key={cat.id}>
								<Category
									category={cat}
									setCategory={setCategory}
								/>
							</div>
						))}
					</div>

					<div className="lineCatCardsContainer">
						<NewLineCategory
							openModal={openModalLine}
							title="Línea"
						/>
						{brands.map((line: IBrand) => (
							<div key={line.id}>
								<Line
									brand={line}
									setBrand={setBrand}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default LinesCategories;
