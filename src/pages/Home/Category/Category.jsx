import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slider1 from '../../../assets/home/slide1.jpg';
import slider2 from '../../../assets/home/slide2.jpg';
import slider3 from '../../../assets/home/slide3.jpg';
import slider4 from '../../../assets/home/slide4.jpg';
import slider5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle';

const Category = () => {
    return (
      <section>
        <SectionTitle
          subHeading={'From 11.00 AM to 10.00 PM'}
          heading={'Order Online'}
        >
            
        </SectionTitle>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className='mx-auto' src={slider1} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img className='mx-auto' src={slider2} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img className='mx-auto' src={slider3} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img className='mx-auto' src={slider4} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img className='mx-auto' src={slider5} alt="" />
            <h1 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h1>
          </SwiperSlide>
        </Swiper>
      </section>
    );
};

export default Category;