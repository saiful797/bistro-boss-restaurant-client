import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaUtensils } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { name, price, category, recipe, _id} = useLoaderData();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = async (data) => {
        // console.log(data);
        // upload an image in imgbb and then get an url
        const imageFile = { image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "Content-Type" : 'multipart/form-data'
            }
        })
        // console.log("Image URL: ", res.data.data.display_url);
        if(res.data.success){
            //now send the menu item data to the server with the image
            const menuItem = {
                name: data.name,
                category: data.category,
                recipe: data.recipe,
                price:  parseFloat(data.price),
                image: res.data.data.display_url,
            }

            // console.log(menuItem);
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            // console.log(menuRes.data);
            if(menuRes.data.modifiedCount > 0){
                reset();
                toast.success(`Menu Updated successfully!`);
            }
        }
    }

    return (
        <div>
            <SectionTitle
                subHeading={'Refresh Item'}
                heading={'Update an Item'}
            />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* recipe name */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input type="text" defaultValue={name} placeholder="Type here" className="input input-bordered w-full" {...register("name", {required: true})} required/>
                    </label>
                    <div className="md:flex gap-3 mt-5">
                        {/* category */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category} className="select select-bordered w-full" {...register("category", {required: true})} required>
                                <option disabled value="default">Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="desserts">Desserts</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </label>
                        {/* price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input type="number" defaultValue={price} placeholder="Type here" step="0.01" className="input input-bordered w-full" {...register("price", {required: true})} required/>
                        </label>
                    </div>
                    {/* details */}
                    <label className="form-control w-full mt-5">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea type="text" defaultValue={recipe} placeholder="Recipe details" className="textarea textarea-bordered textarea-lg w-full" {...register("recipe", {required: true})} required></textarea>
                    </label>
                    {/* Image */}
                    <label className="form-control w-full mt-5">
                        <div className="label">
                            <span className="label-text">Menu Image*</span>
                        </div>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" {...register("image", {required: true})} required/>
                    </label>
                    
                    <button className="flex btn mt-10 gap-1 text-white bg-[#9d702a]">
                        UPDATE MENU ITEM<FaUtensils />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;