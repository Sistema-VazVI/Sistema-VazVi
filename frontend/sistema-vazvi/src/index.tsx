import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { SideBar } from "./components/side-bar/side-bar";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<SideBar />
		<App />
	</React.StrictMode>
);
