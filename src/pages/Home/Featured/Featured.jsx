import SectionTitle from "../../../components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './featured.css';

const Featured = () => {
    return (
        <div className="featured_item bg-fixed p-5 text-orange-500">
            <div>
                <SectionTitle 
                    subHeading={'Check it out'}
                    heading={'FROM OUR MENU'}
                />
            </div>
            <div className="md:flex justify-center items-center gap-5 py-8 px-16 mx-auto">
                <div>
                    <img className="" src={featuredImg} alt="" />
                </div>
                <div className="space-y-3">
                    <p>March 20, 2025</p>
                    <h2 className="uppercase">WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn  btn-outline mt-4 border-0 border-b-4 border-b-white text-2xl text-red-600">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;