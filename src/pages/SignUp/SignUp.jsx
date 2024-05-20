import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
    const { createUser } = useAuth();
    const {register, reset, handleSubmit} = useForm();

    const onSubmit = (data) => {
        // console.log(data);
        const email = data.email;
        const password = data.password;

        createUser(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
        })
        reset();
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name.." className="input input-bordered" {...register('name')} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email.." className="input input-bordered" {...register('email')} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter password.." className="input input-bordered" {...register('password')} required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        
                        <div className="form-control mt-6">
                           <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className='flex justify-center items-center p-3'>
                        <p><small>Have an Account? <Link className='text-sm font-bold text-orange-600' to="/login">Login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;