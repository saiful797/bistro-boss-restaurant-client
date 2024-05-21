import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2'
import useAxiosSecure from '../Hooks/useAxiosSecure';

const FoodCard = ({item}) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const {name, recipe, image, price, _id} = item;


    const handleAddToCart = (foodItem) =>{
        
        if(user && user?.email){
            console.log('user: ', user.email, "FoodItem: ", foodItem);
            //TODO: send cart item to the mongodb database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

            axiosSecure.post('/cart', cartItem)
            .then(res => {
                // console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${name} added to cart successfully!`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not Logged In!",
                text: "Please login to add to cart the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {form: location}} );
                }
            });
        }
    }
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
                    <button onClick={() => handleAddToCart(item)} className="btn btn-sm btn-outline mt-4 border-0 border-b-2 border-b-orange-600 text-orange-600 bg-slate-300 mb-5">Add To Cart</button>
                </Link>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object.isRequired,
}
export default FoodCard;
