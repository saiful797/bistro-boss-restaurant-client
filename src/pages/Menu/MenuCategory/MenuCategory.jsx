import Cover from "../../../Shared/Cover/Cover";
import MenuItems from "../../../Shared/MenuItems/MenuItems";
import PropTypes from "prop-types";

const MenuCategory = ({items, title, img}) => {
    
    return (
        <div>
            {title && <Cover img={img} title={title} />}
            <div className="grid md:grid-cols-2 gap-4 mt-5 mb-5">
                {
                    items.map(item => <MenuItems 
                        key={item._id} 
                        item = {item}
                    />)
                }
            </div>
            <div className="flex justify-center items-center">
                <button className="btn btn-outline mt-4 border-0 border-b-4 border-b-black mb-5 text-2xl">Order Now</button>
            </div>
        </div>
    );
};

MenuCategory.propTypes={
    items: PropTypes.array,
    title: PropTypes.string,
    img: PropTypes.any
}
export default MenuCategory;