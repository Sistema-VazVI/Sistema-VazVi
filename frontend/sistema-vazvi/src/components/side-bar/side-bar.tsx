import './side-bar.css';
import React from 'react';
import { ClipboardIcon, Bars3CenterLeftIcon, UserGroupIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export interface SideBarProps {
    className?: string;
}

export const SideBar: React.FC<SideBarProps> = ({ className = '' }) => (
    <div className={`${className} sideBar`}>
        <nav className="sideNav">
            <div className="sideBarOption">
                <ClipboardIcon className="navIcon" />
                <a href="/home"> Inventario</a>
            </div>
            <div className="sideBarOption">
                <Bars3CenterLeftIcon className="navIcon" />
                <a href="/projects"> Líneas y Categorías</a>
            </div>
            <div className="sideBarOption">
                <UserGroupIcon className="navIcon" />
                <a href="/about"> Clientes</a>
            </div>
            <div className="sideBarOption">
                <ShoppingBagIcon className="navIcon" />
                <a href="/contact"> Venta</a>
            </div>
            <div className="sideBarOption">
                <UserCircleIcon className="navIcon" />
                <a href="/contact">Usuario
                </a></div></nav></div>
);
