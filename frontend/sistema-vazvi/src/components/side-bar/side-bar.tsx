import "./side-bar.css";
import React from "react";
import {
	ClipboardIcon,
	Bars3CenterLeftIcon,
	UserGroupIcon,
	ShoppingBagIcon,
	UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export interface SideBarProps {
	className?: string;
}

export const SideBar: React.FC<SideBarProps> = ({ className = "" }) => (
	<div className={`${className} sideBar`}>
		<nav className="sideNav">
			<div className="sideBarOption">
				<ClipboardIcon className="navIcon" />
				<Link to="/" className="sideNavLink"> Inventario</Link>
			</div>
			<div className="sideBarOption">
				<Bars3CenterLeftIcon className="navIcon" />
				<Link to="/lines-categories" className="sideNavLink"> Líneas y Categorías</Link>
			</div>
			<div className="sideBarOption">
				<UserGroupIcon className="navIcon" />
				<Link to="/clients" className="sideNavLink"> Clientes</Link>
			</div>
			<div className="sideBarOption">
				<ShoppingBagIcon className="navIcon" />
				<Link to="/sales" className="sideNavLink"> Venta</Link>
			</div>
			{/* <div className="sideBarOption">
				<UserCircleIcon className="navIcon" />
				<Link to="/" className="sideNavLink">Usuario</Link>
			</div> */}
		</nav>
	</div>
);
