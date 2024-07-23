import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";
import { getProjects, Project } from './Api';
import { Link } from 'react-router-dom';
import '../css/landing.css';
import '../css/global.css';
import 'swiper/css';
import Post from './Post';

const Landing = ({darkTheme}: any) => {
  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects(9, true);
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div className={darkTheme ? "landing-page dark-theme" : 'landing-page'}>
      <div className="left-landing">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          modules={[Autoplay]}
          className='landing-swiper'
        >
          {
            projects.slice(0, 3).map((project) => (
              <SwiperSlide key={project.id} className='landing-slide'>
                <Link to={`/all-products/${project.id}`} className='landing-slide-big'>
                  <img src={`data:image/jpeg;base64,${project.images[0]}`} alt="product image" />
                  <div className="landing-slide-info">
                    <h4 className="landing-slide-date">{project.createdAt.slice(0, 10)}</h4>
                    <p className='landing-slide-title'>{project.name}</p>
                    <p className='landing-slide-price'>{project.price}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="small-slides">
          {
            projects.slice(3, 9).map((project) => (
              <Link to={`/all-products/${project.id}`} key={project.id} className='landing-slide-small'>
                <div
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${project.images[0]})`,
                    width: '100%',
                    minHeight: '400px',
                    backgroundSize: 'cover', // Adjust as needed
                    backgroundPosition: 'center', // Adjust as needed
                  }}
                ></div>
                <div className="landing-slide-info">
                  <h4 className="landing-slide-date">{project.createdAt.slice(0, 10)}</h4>
                  <p className='landing-slide-title'>{project.name}</p>
                  <p className='landing-slide-price'>{project.price}</p>
                </div>
              </Link>
            ))
          }
        </div>
        {/* <div className="admins-pick">
          {
            projects.slice(5, 8).map((project) => (
              <Link to={`/all-products/${project.id}`} key={project.id} className='landing-slide-small-variant-2 landing-slide-small-variant-2'>
                <div
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${project.images[0]})`,
                    width: '100%',
                    minHeight: '400px',
                    backgroundSize: 'cover', // Adjust as needed
                    backgroundPosition: 'center', // Adjust as needed
                  }}
                ></div>
                <div className="landing-slide-info">
                  <h4 className="landing-slide-date">{project.createdAt.slice(0, 10)}</h4>
                  <p className='landing-slide-title'>{project.name}</p>
                  <p className='landing-slide-price'>{project.price}</p>
                </div>
              </Link>
            ))
          }
        </div> */}
      </div>
      <section className="post-section">
        <Post />
      </section>
    </div>
  );
};

export default Landing;
