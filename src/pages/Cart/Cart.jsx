import { useEffect, useState } from "react";
import { getCart } from "../../utilities/localStorage";
import { useLoaderData } from "react-router-dom";

const Cart = () => {

    const products = useLoaderData();

    const [display, setDisplay] = useState([]);

    useEffect(() => {

        const savedCart = getCart();

        const displayCart = [];

        for (const item of savedCart) {
            const cartItems = products.find(product => product.id === item);
            displayCart.push(cartItems);
        }
        setDisplay(displayCart);

    }, [products]);

    return (
        <div className="min-h-screen max-w-5xl mx-auto mt-5">
            <h2 className="text-4xl font-extrabold">Your Cart</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="font-light text-lg">No.</th>
                            <th className="font-light text-lg">Name</th>
                            <th className="font-light text-lg">Origin</th>
                            <th className="font-light text-lg">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            display.map(item => <tr key={item.id}>
                                <th className="text-black font-semibold text-lg"></th>
                                <td className="text-black font-semibold text-lg">{item.type}</td>
                                <td className="text-black font-semibold text-lg">{item.origin}</td>
                                <td className="text-black font-semibold text-lg">${item.price}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            <h2>Subtotal: </h2>
        </div>
    );
};

export default Cart;