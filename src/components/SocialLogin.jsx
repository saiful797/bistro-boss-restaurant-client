import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleGoogleLogIn = () => {
        googleSignIn()
        .then((result) => {
            console.log(result.user);

            //create user entry in the database
            const userInfo = {name: result.user.displayName, email: result.user.email};
            axiosPublic.post('/users', userInfo)
            .then(() => {
                // console.log(res.data);
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Login successful!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogIn} className="btn btn-outline">
                <FaGoogle />
            </button>
        </div>
    );
};

export default SocialLogin;