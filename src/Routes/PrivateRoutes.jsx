import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import {Navigate,useLocation} from "react-router-dom"; 


const PrivateRoutes = ({children}) => {
    const location=useLocation();
    const {loader,user}=useContext(AuthContext);
    if(loader){
        return <span className="loading-lg loading-spinner"></span>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoutes;