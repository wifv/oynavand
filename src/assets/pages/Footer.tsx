import '../css/global.css'
import '../css/footer.css'

const Footer = ({darkTheme}: any) => {
  return (
    <footer className={darkTheme ? 'footer dark-theme' : 'footer'}>
      <div className="footer-section-1 footer-section logo">OYNAVAND</div>
      
      <hr />
      
      <div className="footer-section-2 footer-section">
        <div className="footer-section-2-about">
          <div className="main-text">Biz Haqimizda</div>
          <div className="secondary-text">Biz Zo'rmiz</div>
        </div>
        <div className="footer-section-2-links">
          <div className="main-text">Biz Haqimizda</div>
          <ul className='footer-social-links footer-links'>
            <li className='footer-link'>
              <a href="https://t.me/Nizomiddinusta" className='secondary-text'>WhatsApp</a>
            </li>
            <li className='footer-link'>
              <a href="https://t.me/Nizomiddinusta" className='secondary-text'>Instagram</a>
            </li>
            <li className='footer-link'>
              <a href="https://t.me/Nizomiddinusta" className='secondary-text' target='blank'>Telegram</a>
            </li>
          </ul>
        </div>
        <div className="footer-section-2-links">
          <div className="main-text">Sayt Havolalari</div>
          <ul className='footer-navigation-links footer-links secondary-text'>
            <li className='footer-link'>
              <a href="/about" className='secondary-text'>Biz Haqimizda</a>
            </li>
            <li className='footer-link'>
              <a href="/contact" className='secondary-text'>Ulanish</a>
            </li>
          </ul>
        </div>
      </div>
      
      <hr />
      
      <div className="footer-section-3 footer-section">
        ©2024 Oynavand Barcha huquqlar himoyalangan
      </div>
    </footer>
  )
}

export default Footer
