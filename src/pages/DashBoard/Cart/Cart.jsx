import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [ cart, refetch ] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price , 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        // alert(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/cart/${id}`)
                .then(res => {
                    // console.log(res.data);
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                    refetch();
                })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly items-center">
                <h1 className="text-4xl">Items: {cart.length}</h1>
                <h1 className="text-4xl">Total Price: ${totalPrice}</h1>
                <Link to="/dashboard/payment" disabled = {!cart.length} className="btn bg-[#D1A054] hover:bg-black text-white text-lg">Pay</Link>
            </div>
            <div>
                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-lg font-medium bg-slate-200">
                                <th> # </th>
                                <th> Image </th>
                                <th> Name </th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* rows */}
                            {
                                cart.map( (item, index) => <tr key={item._id}>
                                    <th>
                                        {index+1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-16 h-16">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                       {item.name}
                                    </td>
                                    <td>
                                        ${item.price}
                                    </td>
                                    <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-outline btn-sm">
                                        <FaTrashAlt  className="text-lg text-red-600"/>
                                    </button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;