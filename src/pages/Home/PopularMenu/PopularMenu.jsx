import SectionTitle from "../../../components/SectionTitle";
import MenuItems from "../../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === "popular")
    
    return (
        <section className="m-10">
            <SectionTitle 
              subHeading={'Popular Menu'}
              heading={'FROM OUR MENU'}
            
            />
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popularMenu.map(item => <MenuItems 
                        key={item._id} 
                        item = {item}
                    />)
                }
            </div>
            <div className="flex justify-center items-center">
                <button className="btn btn-outline mt-4 border-0 border-b-4 border-b-black mb-5 text-2xl">View Full Menu</button>
            </div>
            
        </section>
    );
};

export default PopularMenu;