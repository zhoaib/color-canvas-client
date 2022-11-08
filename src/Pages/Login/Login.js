import React from 'react';
import loginImg from '../../assets/login.jpg'

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }

    return (
        <div className="hero bg-base-200 my-10 rounded-lg p-10">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center mb-5">Login now!</h1>
                    <img className='rounded-xl ' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;