import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../Export'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Navbar from './Navbar';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/productView.css';
import Footer from './Footer';

const ProductView = () => {
  const { id } = useParams()
  const [project, setProject] = useState<any>(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch(`${API}project/${id}`)
      .then(response => response.json())
      .then((data: any) => {
        setProject(data)
      })
  }, [id])

  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('darkTheme') === 'false') {
      setDarkTheme(false)
    } else {
      setDarkTheme(true)
    }
  })


  const handleOrder = (phone: any, id: any) => {
    const order = {
      phoneNumber: phone,
      projectId: id
    }
    fetch(`${API}order`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(order)
    })
  }


  return (
    <section className={darkTheme ? 'dark-theme detail-container' : 'detail-container'}>
      <Navbar />
      {project && project.images && project.images.length > 0 ? (
        <div className="detail-wrapper">
          <Swiper
            slidesPerView={1}
            loop={true}
            className='detail-swiper'
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {project.images.map((image: any, i: any) => (
              <SwiperSlide className='detail-image' key={i}>
                <div
                  style={{
                    backgroundImage: `url(data:image/jpeg;base64,${image})`,
                    width: '100%',
                    minHeight: '400px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="detail-text">
            <div className="main-wrapper">
              <h1 className="detail main-detail name">{project.name}</h1>
              <h1 className="detail main-detail price">{project.price} sum</h1>
              <h1 className="detail main-detail work-date">{project.workday} kun</h1>
            </div>
            <h1 className="detail main-detail description">
              {project.description}
              <div className="order">
                <input type="text" className="order-input input" placeholder='Telefon Raqamingiz' onChange={e => {setPhoneNumber(e.target.value)}} value={phoneNumber}/>
                <div className="order-button" onClick={() => {handleOrder(phoneNumber, project.id)}}>Buyurtma</div>
              </div>
            </h1>
            <h4 className="detail date color-2">{project.createdAt.slice(0, 10)}</h4>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
      <div className="message" onClick={() => setMessage('')}>{message}</div>
    </section>
  )
}

export default ProductView
