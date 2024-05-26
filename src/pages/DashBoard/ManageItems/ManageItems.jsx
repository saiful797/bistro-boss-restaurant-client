import { FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import { RiFileEditFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [ menu, ,refetch ] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDelete = ( item ) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                // console.log(res.data);
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }
    return (
        <div>
            <SectionTitle 
                subHeading={'Hurry Up!'} 
                heading={'Manage All Items'}
            />
            <div className="p-3">
                <h1 className="text-lg font-extralight mt-5 mb-5">Total Items: {menu.length}</h1>
                <div>
                    <div>
                        <div className="overflow-x-auto rounded-xl">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr className="text-lg bg-[#d1a054]">
                                        <th className="text-center">#</th>
                                        <th className="text-center">Item Image</th>
                                        <th className="text-center">Item Name</th>
                                        <th className="text-center">Price</th>
                                        <th className="text-center">Update</th>
                                        <th className="text-center">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        menu.map((item, index) => <tr key={item._id}>
                                            <th className="text-center">{index+1}</th>
                                            <td className="w-24 h-24">
                                                <img className="rounded-tl-xl rounded-br-xl" src={item.image} alt="Food image" />
                                            </td>
                                            <td className="text-center">{item.name}</td>
                                            <td className="text-center">
                                                ${item.price}
                                            </td>
                                            <td className="text-center">
                                                <Link to={`/dashboard/updateItem/${item._id}`}>
                                                    <button className="btn btn-outline btn-sm">
                                                        <RiFileEditFill className="text-lg text-[#d1a054]"/>
                                                    </button>
                                                </Link>
                                            </td>
                                            <td className="text-center">
                                                <button onClick={() => handleDelete(item)} className="btn btn-outline btn-sm">
                                                    <FaTrashAlt  className="text-lg text-red-600"/>
                                                </button>
                                            </td>
                                        </tr> )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;