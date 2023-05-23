/* eslint-disable no-useless-concat */
import "./client-card.css";
import React from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { EyeIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import IClient from "../../models/client.model";
import { hardDeleteClient, viewClient } from "../../controllers/client.controller";
import { Link } from "react-router-dom";
export interface ClientCardProps {
	className?: string;
	client?: IClient;
	setClient?: any;
}

export const ClientCard: React.FC<ClientCardProps> = ({ className = "", client, setClient }) => (
	<div className={`${className} CardClient`}>
		<UserIcon className="ClientLogo" />
		<div className="Data">
			<h5 className="Title">
				{`${client?.first_name}`} {`${client?.name}`}
			</h5>
			<span className="InfoClient">
				<p>Telefono:</p>
				<p>{`${client?.phone}`}</p>
				<p>Saldo: {`${client?.debt}`}</p>
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
				onClick={() => viewClient(client!, setClient)}
			>
				<PencilSquareIcon />
			</button>
			<button
				className="cardBtn"
				onClick={() => hardDeleteClient(client!)}
			>
				<TrashIcon />
			</button>
		</div>
	</div>
);
