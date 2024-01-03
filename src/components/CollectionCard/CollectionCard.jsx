import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CollectionCard = ({ collection }) => {

    const { id, type, description, image } = collection;

    return (
        <div className="card rounded-none border">
            <figure>
                <img src={image} alt="dates" className="h-[200px] w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{type}</h2>
                <p className='my-3 italic'>{description}</p>
                <div className="card-actions">
                    <Link to={`/product/${id}`}><button className="text-xl font-extrabold bg-black text-white py-3 px-5">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

CollectionCard.propTypes = {
    collection: PropTypes.object
}

export default CollectionCard;