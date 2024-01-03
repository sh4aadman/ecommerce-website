import { Link, useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { setCart } from "../../utilities/localStorage";
import { useState } from "react";

const Product = () => {

    const products = useLoaderData();

    const [clicked, setClicked] = useState(false);

    const id = useParams();
    const intId = parseInt(id.id);

    const product = products.find(product => product.id === intId);

    const {type, description, origin, color, size, price, image} = product;

    const handleAddToCart = id => {
        setClicked(true);
        if(!clicked){
            setCart(id);
            toast.success('Product added to cart!', {
                style: {
                    border: '1px solid black'
                },
                iconTheme: {
                    primary: '#000000'
                }
            });
        } else{
            toast('Product already added to cart!', {
                icon: '⚠',
                style: {
                    border: '1px solid black'
                },
                iconTheme: {
                    primary: '#000000'
                }
            });
        }
    }

    return (
        <div className="min-h-screen max-w-5xl mx-auto grid grid-cols-2 gap-5 mt-10">
            <div>
                <h2 className="text-4xl font-extrabold">{type}</h2>
                <p className="italic text-xl font-light my-3">{description}</p>
                <br />
                <p className="border p-2 text-lg italic"><span className=" font-semibold not-italic">Origin:</span> {origin}</p>
                <br />
                <p className="border p-2 text-lg italic"><span className=" font-semibold not-italic">Color:</span> {color}</p>
                <br />
                <p className="border p-2 text-lg italic"><span className=" font-semibold not-italic">Size:</span> {size}</p>
                <br />
                <p className="text-xl text-black font-semibold border p-2">Price: ${price}</p>
                <br />
                <button onClick={() => handleAddToCart(product.id)} className="text-xl font-extrabold bg-black text-white py-3 px-5 w-full">Add to Cart</button>
                <Link to='/'><button className="text-xl font-extrabold text-black py-3 px-5 w-full border mt-2">Back to Home</button></Link>
                <Toaster></Toaster>
            </div>
            <div className="mx-auto">
                <img src={image} alt="product-image" />
            </div>
        </div>
    );
};

export default Product;