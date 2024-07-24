import { useEffect, useState } from 'react'
import { API } from '../../Export'
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState<any>()
  useEffect(() => {
    fetch(`${API}content/${id}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((data: any) => {
      console.log(data)
      setPost(data)
    })
  }, [])

  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('darkTheme') === 'false') {
      setDarkTheme(false)
    } else {
      setDarkTheme(true)
    }
  })

  return (
    <section className={darkTheme ? 'dark-theme post-container' : 'post-container'}>
      <Navbar />
      {
        post ? (
        <div className='post-detail'>
          <div className="post">
            <h1 style={{letterSpacing: '1px'}}>{post.title}</h1>
            <br />
            <h2 style={
              {
                fontSize: '20px',
                fontWeight: '400',
                letterSpacing: '1px'
              }
             }>{post.text}</h2>
            <div className='color-2 post-date'>{post.createdAt.slice(0, 10)}</div>
          </div>
        </div>
        ) : (
          "loading"
        )
      }
      <Footer />
    </section>
  )
}

export default Post
