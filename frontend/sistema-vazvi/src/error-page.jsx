import { useRouteError } from "react-router-dom";
import './routes/app.css' 

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Lo sentimos, un error inesperado ocurrió.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
