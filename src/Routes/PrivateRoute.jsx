import { BounceLoader } from "react-spinners";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();

    if(user){
        return children;
    }

    if(loading){
        return <div className="flex justify-center items-center">
            <BounceLoader
                color="red"
                size={150}
            />
        </div>
    }

    return <Navigate to="/login" state={{from: location}}/>
};

PrivateRoute.propTypes ={
    children: PropTypes.node,
}
export default PrivateRoute;