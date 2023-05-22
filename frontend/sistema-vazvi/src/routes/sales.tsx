/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import "./app.css";
import Modal from "react-modal";
import IProduct from "../models/product.model";
import { setAllProducts } from "../controllers/product.controller";
import { ShoppingCart } from "../components/shopping-cart/shopping-cart";
import { SaleCard } from "../components/sale-card/sale-card";
import { ProductSearchBar } from "../components/product-search-bar/product-search-bar";
import { Cliente } from "../components/cliente/cliente";
import { CheckBadgeIcon, XMarkIcon } from "@heroicons/react/24/solid";
import IBrand from "../models/brand.model";
import ICategory from "../models/category.model";
import { setAllBrands } from "../controllers/brand.controller";
import { setAllCategories } from "../controllers/category.controller";
import IShoppingCart from "../models/shopping-cart.model";
import { setAllClients } from "../controllers/client.controller";
import IClient from "../models/client.model";
import { addTicket } from "../controllers/ticket.controller";
import { ITicketCreate } from '../models/ticket.model';
import { Link } from "react-router-dom";

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

function Sales() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [brands, setBrands] = useState<IBrand[]>([]);
	const [clients, setClients] = useState<IClient[]>([] as IClient[]);

	const [shoppingCart, setShoppingCart] = useState<IShoppingCart[]>([] as IShoppingCart[]);

	const [brand, setBrand] = useState<number | undefined>(undefined);
	const [category, setCategory] = useState<number | undefined>(undefined);
	const [search, setSearch] = useState<string | undefined>(undefined);

	const [modalIsOpen, setIsOpen] = useState(false);
	const [confirmation, setConfirmation] = useState(false);

	const [client, setClient] = useState<number>(0);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	function openConfirmation() {
		setConfirmation(true);
	}

	function closeConfirmation() {
		setConfirmation(false);
	}

	function handdleCreation(){
		if(client != 0 && shoppingCart.length > 0){

			var newTicket: ITicketCreate = {
				total: shoppingCart.reduce((total, item) => total + (item.product.price * item.quantity), 0),
				client: client
			};
			openConfirmation();
			addTicket(newTicket, shoppingCart);
			
		}else{

			setIsOpen(false);
		}
	}

	React.useEffect(() => {
		setAllProducts(setProducts, category, brand, search);
		setAllCategories(setCategories);
		setAllBrands(setBrands);
		setAllClients(setClients, search);
	}, []);
	
	React.useEffect(() => {
		setAllProducts(setProducts, category, brand, search);
	}, [search, products, shoppingCart]);

	return (
		<div>
			<div className="container">
				<h1>Venta</h1>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					style={customStyles}
					contentLabel="Form Modal"
				>
					<div className="confirmationModal">
						<h1>¿Terminar la venta?</h1>

						<div className="confirmationBtns">
							<button
								className="btn btnSecondary"
								onClick={closeModal}
							>
								Volver
							</button>
							<button
								className="btn btnPrimary"
								onClick={() => {
									closeModal();
									handdleCreation();
								}}
							>
								Terminar
							</button>
						</div>
					</div>
				</Modal>

				<Modal
					isOpen={confirmation}
					onRequestClose={closeConfirmation}
					style={customStyles}
					contentLabel="Confirmation Modal"
					shouldCloseOnOverlayClick={false}
				>
					<div className="confirmationModal">
						<h1>
							<CheckBadgeIcon className="confirmationLogo"/> ¡La venta fue registrada!
						</h1>

						<div className="confirmationBtns">
							<Link
								to="/clients"
								className="btn btnSecondary"
								onClick={closeConfirmation}
							>
								Terminar
							</Link>
							<Link
								to="/clients"
								className="btn btnPrimary"
								onClick={closeConfirmation}
							>
								Abonar
							</Link>
						</div>
					</div>
				</Modal>
				<div className="grid">
					<div className="column">
						<Cliente clients={clients} setClient={setClient}/>
					</div>
					<div className="col2">
						<div>
							<ProductSearchBar 
								categories={categories}
								brands={brands}
								searchFilter={setSearch}
								categoryFilter={setCategory}
								brandFilter={setBrand}
							/>
							<div className="containerCardsSales">
								{products.map((product: IProduct) => (
									<div key={product.id}>
										<SaleCard 
											product={product}
											setShoppingCart={setShoppingCart}
											shoppingCart={shoppingCart} 
										/>
									</div>
								))}
							</div>
						</div>
						<div>
							<ShoppingCart 
								openModal={openModal} 
								setShoppingCart={setShoppingCart}
								shoppingCart={shoppingCart}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sales;
