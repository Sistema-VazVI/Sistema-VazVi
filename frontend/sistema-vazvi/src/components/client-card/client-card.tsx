/* eslint-disable no-useless-concat */
import "./client-card.css";
import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { EyeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import IClient from "../../models/client.model";
import { hardDeleteClient, viewClient } from "../../controllers/client.controller";
import { Dispatch, SetStateAction } from 'react';

import { Link } from "react-router-dom";
export interface ClientCardProps {
	className?: string;
	openModal?: Dispatch<SetStateAction<boolean>>;
	client: IClient;
	setClient: Dispatch<SetStateAction<IClient | undefined>>;
}

export const ClientCard: React.FC<ClientCardProps> = ({ className = "", openModal, client, setClient }) => (
	<div className={`${className} CardClient`}>
		<UserIcon className="ClientLogo" />
		<div className="Data">
			<h5 className="Title">{`${client.name}`}</h5>
			<span className="InfoClient">
				<p>Telefono:</p>
				<p>{`${client?.phone}`}</p>
				<p>Saldo: {`${client.debt?.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}`}</p>
			</span>
		</div>
		<div className="CardButtons">
			<Link
				to={"/clients/"+`${client?.id}`}
				className="cardBtn"
			>
				<EyeIcon className="eyeIcon" />
			</Link>
			<button
				className="cardBtn"
				onClick={() => viewClient(client, setClient, openModal!)}
			>
				<PencilSquareIcon />
			</button>
		</div>
	</div>
);
