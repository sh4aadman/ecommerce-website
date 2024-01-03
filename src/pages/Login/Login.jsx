import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const {signInUser} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
        .then(response => {
            if(response){
                toast.success('Logged in successfully!', {
                    style: {
                        border: '1px solid black'
                    },
                    iconTheme: {
                        primary: '#000000'
                    }
                });
            }
            navigate(location.state ? location.state : '/')
        })
        .catch(error => {
            if(error){
                toast('Please check your log in credentials!', {
                    icon: '⚠',
                    style: {
                        border: '1px solid black'
                    },
                    iconTheme: {
                        primary: '#000000'
                    }
                });
            }
        })
    }

    return (
        <div className="min-h-screen max-w-5xl mx-auto">
            <Toaster></Toaster>
            <form onSubmit={handleLogin} className="w-1/2 mx-auto">
                <div className="flex justify-center mt-5">
                    <div className="w-full">
                        <div className="space-y-12 border border-1 border-[#ABABAB] p-14">
                            <h2 className="font-bold text-2xl">Login</h2>
                            <input
                                className="w-full border-black border-b placeholder:font-medium placeholder:text-slate-400 placeholder:italic focus:outline-none"
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Username or Email"
                            />
                            <br />
                            <input
                                className="w-full border-black border-b placeholder:font-medium placeholder:text-slate-400 placeholder:italic focus:outline-none"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                            />
                            <br />
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <label className="label cursor-pointer p-0">
                                        <input type="checkbox" className="checkbox border-black" />
                                    </label>
                                    <span className="font-medium">Remember me</span>
                                </div>
                                <div>
                                    <a className="underline text-black" href="http://">
                                        Forgot Password
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button className="w-full text-xl font-extrabold bg-black text-white py-3 px-5">
                                    Login
                                </button>
                            </div>
                            <div className="text-center">
                                <p>Do not have an account? <Link className="text-black underline" to='/register'>Create an account</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;