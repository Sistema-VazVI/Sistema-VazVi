import "./ticket.css";
import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
import { Icon } from "@iconify/react";
import ITicket from "../../models/ticket.model";
import Modal from "react-modal";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { TicketPayment } from "../ticket-payment/ticket-payment";
import { TicketDetail } from "../ticket-detail/ticket-detail";
import moment from "moment";
import { toast } from "react-toastify";

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
		if(!ticket.is_payed) {
			setPayment(true);
		}else{
			toast.warning('El ticket # '+ ticket.id + ' ya ha sido pagado.');
		}
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
				<TicketDetail ticketID={ticket.id} items={ticket.items} total={ticket.total}/>
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
                <TicketPayment  ticketID={ticket.id} closePayment={closePayment}/>
			</Modal>
			<Icon
				icon="ic:outline-receipt-long"
				className="ticketI"
			/>
			<div className="DataTick">
				<h6 className="TitleT">Ticket #{`${ticket.id}`}</h6>
				<span className="InfoTicket">
					<p>Fecha: {`${moment(ticket.createdOn).format('DD-MM-YYYY')}`}</p>
					<p>Total: {`${ticket.total.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}`}</p>
					<p>Abonado: {`${ticket.payed.toLocaleString("es-MX", { style: "currency", currency: "MXN" })}`}</p>
					<p>Restante: {`${(ticket.total - ticket.payed).toLocaleString("es-MX", { style: "currency", currency: "MXN" })}`}</p>
				</span>
			</div>
			<div className="divRight">
				{ticket.is_payed ? (
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
