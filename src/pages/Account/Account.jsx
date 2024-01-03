import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Account = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="min-h-screen max-w-5xl mx-auto mt-5">
            <h2 className="text-4xl font-semibold">Account Details</h2>
            <form className="">
                <div className="flex justify-center mt-5">
                    <div className="w-full">
                        <div className="space-y-12 border border-1 border-[#ABABAB] p-14">
                            <input
                                className="w-full border-black border-b placeholder:font-medium placeholder:text-slate-400 placeholder:italic focus:outline-none"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Username"
                                defaultValue={user.displayName}
                            />
                            <br />
                            <input
                                className="w-full border-black border-b placeholder:font-medium placeholder:text-slate-400 placeholder:italic focus:outline-none"
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                defaultValue={user.email}
                            />
                            <br />
                            <input
                                className="w-full border-black border-b placeholder:font-medium placeholder:text-slate-400 placeholder:italic focus:outline-none"
                                type="text"
                                name="photo_url"
                                id="photo-url"
                                placeholder="Photo URL"
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
                            <div>
                                <button className="text-xl font-extrabold bg-black text-white py-3 px-5">
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Account;