import { Link } from "react-router-dom";
import error404 from '../../src/assets/404.gif'

const ErrorPage = () => {
    return (
        <div className="min-h-[80vh] flex justify-between items-center">
            <div>
                <Link to='/' className="btn btn-outline">
                    Let`s Go Back
                </Link>
            </div>
            <div>
                <img src={error404} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;