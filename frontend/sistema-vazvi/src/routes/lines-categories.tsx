import React, { useState } from "react";
import "./app.css";
import Modal from "react-modal";
import { NewLineForm } from "../components/new-line-form/new-line-form";
import { NewLineCategory } from "../components/new-line-category/new-line-category";
import { NewCategoryForm } from "../components/new-category-form/new-category-form";
import { Category } from "../components/category/category";
import { Line } from "../components/line/line";
import { XMarkIcon } from "@heroicons/react/24/outline";
import IBrand, { IBrandCreate, IBrandUpdate } from "../models/brand.model";
import { setAllBrands, addBrand } from "../controllers/brand.controller";
import ICategory, { ICategoryCreate, ICategoryUpdate } from "../models/category.model";
import { setAllCategories, addCategory } from "../controllers/category.controller";
import { ToastContainer } from "react-toastify";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		transform: "translate(-50%, -50%)",
		borderRadius: 30,
	},
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.8)",
	},
};

function LinesCategories() {
	const [modalIsOpenCat, setIsOpenCat] = useState(false);
	const [modalIsOpenLine, setIsOpenLine] = useState(false);
	const [brands, setBrands] = useState<IBrand[]>([]);
	const [brand, setBrand] = useState<IBrand | undefined>(undefined);
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [category, setCategory] = useState<ICategory | undefined>(undefined);

	function openModalCat() {
		setIsOpenCat(true);
	}

	function closeModalCat() {
		setIsOpenCat(false);
		setCategory(undefined);
	}

	function openModalLine() {
		setIsOpenLine(true);
	}

	function closeModalLine() {
		setIsOpenLine(false);
		setBrand(undefined);
	}

	React.useEffect(() => {
		setAllBrands(setBrands);
		setAllCategories(setCategories);
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
					<XMarkIcon
						className="closeIcon"
						onClick={closeModalLine}
					/>
					<NewLineForm 
						closeModal={closeModalLine}
						brand={brand}
					/>
				</Modal>
				<Modal
					isOpen={modalIsOpenCat}
					onRequestClose={closeModalCat}
					style={customStyles}
					contentLabel="Form Modal"
				>
					<XMarkIcon
						className="closeIcon"
						onClick={closeModalCat}
					/>
					<NewCategoryForm
						closeModal={closeModalCat} 
						category={category}
					/>
				</Modal>
				<div className="lineCatContainer">
					<div className="lineCatCardsContainer">
						<NewLineCategory
							openModal={openModalCat}
							title="Categoría"
						/>
						{categories
						.filter((category) => category.is_active)
						.map((cat: ICategory) => (
							<div key={cat.id}>
								<Category
									category={cat}
									setCategory={setCategory}
									setIsOpen={setIsOpenCat}
								/>
							</div>
						))}
					</div>

					<div className="lineCatCardsContainer">
						<NewLineCategory
							openModal={openModalLine}
							title="Línea"
						/>
						{brands
						.filter((brand) => brand.is_active)
						.map((line: IBrand) => (
							<div key={line.id}>
								<Line
									brand={line}
									setBrand={setBrand}
									setIsOpen={setIsOpenLine}
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			<ToastContainer 
				position="top-center"
				theme="colored"
			/>
			
		</div>
	);
}

export default LinesCategories;
