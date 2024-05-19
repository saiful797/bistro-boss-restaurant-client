import PropTypes from 'prop-types';

const MenuItems = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className='flex gap-5'>
            <img className="w-28 h-28 bg-slate-200 rounded-e-full rounded-b-full gap-px" src={image} alt="" />
            <div>
                <p className='uppercase'>{name}-------------</p>
                <h4>{recipe}</h4>
            </div>
            <h2 className='text-[#BB8506]'>${price}</h2>
        </div>
    );
};

MenuItems.propTypes={
    item: PropTypes.object
}
export default MenuItems;