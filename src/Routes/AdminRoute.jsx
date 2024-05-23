import { BounceLoader } from "react-spinners";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {
    const { user, loading} = useAuth();
    const [ isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if( user && isAdmin ){
        return children;
    }

    if(loading || isAdminLoading){
        return <div className="flex justify-center items-center">
            <BounceLoader
                color="red"
                size={150}
            />
        </div>
    }

    return <Navigate to="/" state={{from: location}} replace/>
};

AdminRoute.propTypes ={
    children: PropTypes.node,
}
export default AdminRoute;