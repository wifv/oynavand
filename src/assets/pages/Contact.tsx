import "../css/global.css"
import "../css/contact.css"
import mail from '../images/mail.svg'
import instagram from '../images/instagram.svg'
import telegram from '../images/telegram.svg'
import Navbar from "./Navbar"
import { useEffect, useState } from "react"

const Contact = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(e.currentTarget)
    const data = new FormData(e.currentTarget)

    // console.log(data)
    // console.log(data.get("name"))
    // console.log(data.get("number"))
    // console.log(data.get("message"))

  
    fetch("ayubxon aka qales", {
        method: 'POST',
        body: data
    }).then(response => {
        if (response.ok) {
           console.log('ok')
        } else {
          console.log("not ok");
        }
    })
  }

  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('darkTheme') === 'false') {
      setDarkTheme(false)
    } else {
      setDarkTheme(true)
    }
  })
  
  return (
    <div className={darkTheme ? "dark-theme form-wrapper" : 'form-wrapper'}>
      <Navbar />

      <h1 className="text-center">Bog'lanish</h1>

      <br /><br /><br /><br /><br />

      <div className="form-container">
        <div className="form-info-container">
          <div className="text-center no-mg ">Biz Bilan Bog'laning</div>
          <div className="info-block">
            <img src={mail} alt="" className="svg"/>
            <h5>Email</h5>
            <a href="mailto:wifvpersonal@gmail.com" className="color-2">wifvpersonal@gmail.com</a>
          </div>
          <div className="info-block">
            <img src={telegram} alt="" className="svg"/>
            <h5>Telegram</h5>
            <a href="https://t.me/bdfelka" className="color-2">+9983057664</a>
          </div>
          <div className="info-block">
            <img src={instagram} alt="" className="svg"/>
            <h5>Instagram</h5>
            <a href="https://www.instagram.com/wifv_personal" className="color-2">@wifv_personal</a>
          </div>
        </div>
        <form id="form" name="form" className="form" onSubmit={handleSubmit}>
          <div className="text-center">Bizga Habar Yuboring</div>
          <input type="text" name="name" placeholder="Ismingizni yozing" required/>
          <input type="number" name="number" placeholder="Telefon raqamingizni yozing" required/>
          <textarea name="message" id="form-text" cols={30} rows={10} placeholder="Habaringizni yozing" required></textarea>
          <button type="submit" className="submit-btn">Habar Yuborish</button>
        </form>
      </div>
    </div>
  )
}


export default Contact
