import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="card w-80 bg-base-100 shadow-xl mx-auto">
            <figure>
                <img src={image} alt="Food"/>
            </figure>
            <p className='bg-slate-950 text-white px-2 absolute right-4 top-4'>{price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>

                <Link className="flex justify-center items-center">
                    <button className="btn btn-outline mt-4 border-0 border-b-4 border-b-orange-600 text-orange-600 bg-slate-300 mb-5 text-xl">Add To Cart</button>
                </Link>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object.isRequired,
}
export default FoodCard;
