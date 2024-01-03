import { useLoaderData } from "react-router-dom";
import CollectionCard from "../../components/CollectionCard/CollectionCard";

const Collection = () => {

    const collections = useLoaderData();

    return (
        <div className="min-h-screen grid grid-cols-3 gap-5 max-w-5xl mx-auto mt-5">
            {
                collections.map(collection => <CollectionCard key={collection.id} collection={collection}></CollectionCard>)
            }
        </div>
    );
};

export default Collection;