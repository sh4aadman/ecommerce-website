import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log(email, password)

        createUser(email, password)
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
        })
        .catch(error => {
            if(error){
                toast('Please check your registration credentials!', {
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
            <form onSubmit={handleRegister} className="w-1/2 mx-auto">
                <div className="flex justify-center mt-5">
                    <div className="w-full">
                        <div className="space-y-12 border border-1 border-[#ABABAB] p-14">
                            <h2 className="font-bold text-2xl">Register</h2>
                            <input
                                className="w-full border-black border-b placeholder:font-medium placeholder:text-slate-400 placeholder:italic focus:outline-none"
                                type="text"
                                name="f_name"
                                id="f_name"
                                placeholder="First Name"
                            />
                            <br />
                            <input
                                className="w-full border-black border-b placeholder:font-medium placeholder:text-slate-400 placeholder:italic focus:outline-none"
                                type="text"
                                name="l_name"
                                id="l_name"
                                placeholder="Last Name"
                            />
                            <br />
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
                            <input
                                className="w-full border-black border-b placeholder:font-medium placeholder:text-slate-400 placeholder:italic focus:outline-none"
                                type="password"
                                name="c_password"
                                id="c_password"
                                placeholder="Confirm Password"
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
                                    Register
                                </button>
                            </div>
                            <div className="text-center">
                            <p>Already have an account? <Link className="text-black underline" to='/login'>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;