import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";

const AddItems = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <SectionTitle 
                subHeading={"what's new?"}
                heading={"Add An Item"}
            />
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name='name' {...register("name")} />
                    <select {...register("name")} className="select select-bordered w-full max-w-xs">
                        <option disabled selected className="text-blue-200">Select a category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="desserts">Desserts</option>
                        <option value="drinks">Drinks</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;