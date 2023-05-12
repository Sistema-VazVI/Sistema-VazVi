import React from "react";
import ReactDOM from "react-dom/client";
import Products from "./routes/products";
import { SideBar } from "./components/side-bar/side-bar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <div><SideBar /> <Products/></div>,
		errorElement: <ErrorPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		
		<RouterProvider router={router}/>
	</React.StrictMode>
);
