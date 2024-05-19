import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Testimonial from "../Testimonial/Testimonial";
import PopularMenu from "../PopularMenu/PopularMenu";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Home
                </title>
            </Helmet>
            <Banner />
            <Category />
            <PopularMenu />
            <Featured />
            <Testimonial />
        </div>
    );
};

export default HomePage;