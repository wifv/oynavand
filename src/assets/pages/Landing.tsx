import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import '../css/landing.css'
import '../css/global.css'
import testImage from '../images/asdf.jpg'

// Import Swiper styles
import 'swiper/css';

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="left-landing">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={
            {delay: 5000}
          }
          modules={[Autoplay]}
          className='landing-swiper'
        >
          <SwiperSlide className='landing-slide'>
            <a href="/product-info" className='landing-slide-big'>
              <img src={testImage} alt="product image" />
              <div className="landing-slide-info">
                <h4 className="landing-slide-date">bugun</h4>
                <p className='landing-slide-title'>titlexon</p>
                <p className='landing-slide-price'>pricejon</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='landing-slide'>
            <a href="/product-info" className='landing-slide-big'>
              <img src={testImage} alt="product image" />
              <div className="landing-slide-info">
                <h4 className="landing-slide-date">bugun</h4>
                <p className='landing-slide-title'>titlexon</p>
                <p className='landing-slide-price'>pricejon</p>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className='landing-slide'>
            <a href="/product-info" className='landing-slide-big'>
              <img src={testImage} alt="product image" />
              <div className="landing-slide-info">
                <h4 className="landing-slide-date">bugun</h4>
                <p className='landing-slide-title'>titlexon</p>
                <p className='landing-slide-price'>pricejon</p>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
        <div className="small-slides">
          <a href="/product-info" className='landing-slide-small'>
            <img src={testImage} alt="product image" />
            <div className="landing-slide-info">
              <h4 className="landing-slide-date">bugun</h4>
              <p className='landing-slide-title'>titlexon</p>
              <p className='landing-slide-price'>pricejon</p>
            </div>
          </a>
          <a href="/product-info" className='landing-slide-small'>
            <img src={testImage} alt="product image" />
            <div className="landing-slide-info">
              <h4 className="landing-slide-date">bugun</h4>
              <p className='landing-slide-title'>titlexon</p>
              <p className='landing-slide-price'>pricejon</p>
            </div>
          </a>
          <a href="/product-info" className='landing-slide-small'>
            <img src={testImage} alt="product image" />
            <div className="landing-slide-info">
              <h4 className="landing-slide-date">bugun</h4>
              <p className='landing-slide-title'>titlexon</p>
              <p className='landing-slide-price'>pricejon</p>
            </div>
          </a>
          <a href="/product-info" className='landing-slide-small'>
            <img src={testImage} alt="product image" />
            <div className="landing-slide-info">
              <h4 className="landing-slide-date">bugun</h4>
              <p className='landing-slide-title'>titlexon</p>
              <p className='landing-slide-price'>pricejon</p>
            </div>
          </a>
        </div>
        <div className="admins-pick">
          <a href="/product-info" className='landing-slide-small-variant-2 landing-slide-small-variant-2'>
            <img src={testImage} alt="product image" />
            <div className="landing-slide-info">
              <h4 className="landing-slide-date">bugun</h4>
              <p className='landing-slide-title'>titlexon</p>
              <p className='landing-slide-price'>pricejon</p>
            </div>
          </a>
          <a href="/product-info" className='landing-slide-small-variant-2 landing-slide-small-variant-2'>
            <img src={testImage} alt="product image" />
            <div className="landing-slide-info">
              <h4 className="landing-slide-date">bugun</h4>
              <p className='landing-slide-title'>titlexon</p>
              <p className='landing-slide-price'>pricejon</p>
            </div>
          </a>
          <a href="/product-info" className='landing-slide-small-variant-2 landing-slide-small-variant-2'>
            <img src={testImage} alt="product image" />
            <div className="landing-slide-info">
              <h4 className="landing-slide-date">bugun</h4>
              <p className='landing-slide-title'>titlexon</p>
              <p className='landing-slide-price'>pricejon</p>
            </div>
          </a>
        </div>
      </div>
      <section className="post-section">
        <a href='/post' className="post">
          <div className="post-date">09.09.24</div>
          <div className="post-info">informatsiya</div>
          <hr />
        </a>
      </section>
    </div>
  );
};

export default Landing
