import PropTypes from 'prop-types';

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
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object.isRequired,
}
export default FoodCard;
