import SectionTitle from "../../../components/SectionTitle";
import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('reviews.json')
        .then(res => {
            setReviews(res.data);
        })
    }, [])
    return (
        <section>
            <SectionTitle 
               subHeading={'What Our Clients Say'}
               heading={'TESTIMONIALS'}
            />
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide 
                       key = {review._id}
                    >
                        <div className="w-11/12 mx-auto space-y-5 m-10">
                            <Rating
                                className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />

                            <FaQuoteLeft className="mx-auto text-6xl"/>

                            <p className="text-center">{review.details}</p>
                            <h3 className="text-4xl text-[#CD9003] text-center">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            </div>
        </section>
    );
};
export default Testimonial;