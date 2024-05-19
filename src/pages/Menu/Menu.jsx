import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div className="space-y-4 mb-10">
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
            {/* Main Cover */}
            <Cover img = { menuImg } title={"Our Menu"}/>

            {/* Offered Menu section */}
            <SectionTitle 
               subHeading={"Don't miss"}
               heading={"TODAY'S OFFER"}
            />
            <MenuCategory items={offered}/>

            {/* dessert menu items */}
            <MenuCategory  
              items={desserts} 
              title={"dessert"} 
              img={dessertImg}
            />
            {/* Pizza menu items */}
            <MenuCategory  
              items={pizza} 
              title={"pizzas"} 
              img={pizzaImg}
            />
            {/* Salads menu items */}
            <MenuCategory  
              items={salads} 
              title={"salads"} 
              img={saladImg}
            />
            {/* Soup menu items */}
            <MenuCategory  
              items={soup} 
              title={"soups"} 
              img={soupImg}
            /> 
        </div>
    );
};

export default Menu;