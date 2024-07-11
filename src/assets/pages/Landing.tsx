import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import testImage from '../images/asdf.jpg'
import { useEffect, useState } from "react"
import { getProjects, Project } from './Api';
import '../css/landing.css'
import '../css/global.css'
import 'swiper/css';

const Landing = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects(9, true);
      setProjects(data);
    };
    fetchProjects();
  }, []);

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
          {
            projects.slice(0,3).map((project, i) => (
              <SwiperSlide className='landing-slide' key={i}>
                <a href="/product-info" className='landing-slide-big'>
                  <img src={`data:image/jpeg;base64,${project.images[0]}`} alt="product image" />
                  <div className="landing-slide-info">
                    <h4 className="landing-slide-date">{project.createdAt.slice(0, 10)}</h4>
                    <p className='landing-slide-title'>{project.name}</p>
                    <p className='landing-slide-price'>{project.price}</p>
                  </div>
                </a>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="small-slides">
          {
            projects.slice(3, 6).map((project, i) => (
              <a href="/product-info" className='landing-slide-small' key={i}>
                <img src={`data:image/jpeg;base64,${project.images[0]}`} alt="product image" />
                <div className="landing-slide-info">
                  <h4 className="landing-slide-date">{project.createdAt.slice(0, 10)}</h4>
                  <p className='landing-slide-title'>{project.name}</p>
                  <p className='landing-slide-price'>{project.price}</p>
                </div>
              </a>
            ))
          }
        </div>
        <div className="admins-pick">
          {
            projects.slice(6, 9).map((project, i) => (
              <a href="/product-info" className='landing-slide-small-variant-2 landing-slide-small-variant-2'>
                <img src={`data:image/jpeg;base64,${project.images[0]}`} alt="product image" />
                <div className="landing-slide-info">
                  <h4 className="landing-slide-date">{project.createdAt.slice(0, 10)}</h4>
                  <p className='landing-slide-title'>{project.name}</p>
                  <p className='landing-slide-price'>{project.price}</p>
                </div>
              </a>
            ))
          }
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
