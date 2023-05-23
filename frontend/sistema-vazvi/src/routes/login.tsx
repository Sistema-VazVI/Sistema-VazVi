import { useRouteError } from "react-router-dom";
import { Login } from '../components/login/login';

export default function LogIn() {
    const error = useRouteError();
    console.error(error);
  
    return (
      <div className="container">
        <Login />
      </div>
    );
  }
  