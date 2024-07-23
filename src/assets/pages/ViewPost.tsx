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
          <div>
          <Link to={`/posts/${post.id}`} className="post">
            <h1>{post.title}</h1>
            <br />
            <h2>{post.text}</h2>
            <div className='color-2'>{post.createdAt.slice(0, 10)}</div>
          </Link>
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
