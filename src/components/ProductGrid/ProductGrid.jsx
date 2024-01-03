import { Link, useLoaderData } from "react-router-dom";

const ProductGrid = () => {

    const products = useLoaderData();

    return (
        <div className="min-h-screen max-w-5xl mx-auto grid grid-cols-3 gap-10 mt-5">
            {
                products.map(product => <Link key={product.id} to={`/product/${product.id}`}><div>
                    <img src={product.image} className="h-[200px] w-full"></img>
                    <p className="text-center hover:underline font-semibold">{product.type}</p>
                    </div></Link>)
            }
        </div>
    );
};

export default ProductGrid;