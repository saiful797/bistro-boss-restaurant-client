import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const {signIn} = useAuth();

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    }, [])
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then (result => {
            if(result.user){
                Swal.fire({
                    title: "Login Successful!",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
            }
        })
    }

    const handleValidateCaptcha = () =>{
        const user_captcha_value = captchaRef.current.value;
        // console.log(user_captcha_value)
        if(validateCaptcha(user_captcha_value)){
            setDisabled(false);
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email.." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter password.." className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input  onBlur={handleValidateCaptcha} type="text" ref={captchaRef} name="captcha" placeholder="Type the captcha.." className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                           <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='flex justify-center items-center p-3'>
                        <p><small>New Here? <Link className='text-sm font-bold text-orange-600' to="/signUp">Create a new account</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;