import FoodCard from "../../../components/FoodCard";
import PropTypes from 'prop-types';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
            {
                items.map(item => <FoodCard
                    key = {item._id} 
                    item = {item}
                />)
            }
        </div>
    );
};

OrderTab.propTypes = {
    items: PropTypes.array.isRequired,
}

export default OrderTab;