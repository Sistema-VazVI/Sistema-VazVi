import "./ticket.css";
import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
import ITicket from "../../models/ticket.model";
import Modal from "react-modal";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { TicketPayment } from "../ticket-payment/ticket-payment";
import { TicketDetail } from "../ticket-detail/ticket-detail";

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
export interface TicketProps {
	className?: string;
	ticket: ITicket;
}

const Ticket: React.FC<TicketProps> = ({ className = "", ticket }) => {
	const [modalDetail, setDetail] = useState(false);
	const [modalPayment, setPayment] = useState(false);

	function openDetail() {
		setDetail(true);
	}

	function closeDetail() {
		setDetail(false);
	}

	function openPayment() {
		setPayment(true);
	}

	function closePayment() {
		setPayment(false);
	}

	return (
		<div className={`${className} CardTicket`}>
			<Modal
				isOpen={modalDetail}
				onRequestClose={closeDetail}
				style={customStyles}
				contentLabel="Form Modal"
			>
				<XMarkIcon
					className="closeIcon"
					onClick={closeDetail}
				/>
				<TicketDetail/>
				<button className="btn btnPrimary" onClick={closeDetail} >Aceptar</button>
			</Modal>
			<Modal
				isOpen={modalPayment}
				onRequestClose={closePayment}
				style={customStyles}
				contentLabel="Form Modal"
			>
				<XMarkIcon
					className="closeIcon"
					onClick={closePayment}
				/>
                <TicketPayment/>
			</Modal>
			<Icon
				icon="ic:outline-receipt-long"
				className="ticketI"
			/>
			<div className="DataTick">
				<h6 className="TitleT">Ticket #{`${ticket.id}`}</h6>
				<span className="InfoTicket">
					<p>Fecha: DD-MM-YYYY</p>
					<p>Total: ${`${ticket.total}`}</p>
					<p>Abonado: $500.00</p>
					<p>Restante: $1000.00</p>
				</span>
			</div>
			<div className="divRight">
				{ticket?.is_payed ? (
					<div className="estadoTicket pagado">Pagado</div>
				) : (
					<div className="estadoTicket pendiente">Pendiente</div>
				)}
				<div className="CardButtonsT">
					<button
						className="cardBtnT"
						onClick={openDetail}
					>
						<EyeIcon />
					</button>
					<button
						className="cardBtnT"
						onClick={openPayment}
					>
						<Icon
							icon="mingcute:pig-money-line"
							width="25"
							height="25"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Ticket;
