import { useEffect, useState } from 'react'
import { API } from '../../Export'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export interface Post {
  id: number,
  title: string,
  text: string,
  createdAt: string;
}

const AllPosts = () => {
  let t = 10
  const [n, setN] = useState(t)
  
  const [posts, setPosts] = useState<Post[]>()
  useEffect(() => {
    fetch(`${API}content`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((data: any) => {
      console.log(data)
      setPosts(data)
    })
  }, [n])

  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('darkTheme') === 'false') {
      setDarkTheme(false)
    } else {
      setDarkTheme(true)
    }
  })

  return (
    <div className={darkTheme ? 'dark-theme post-wrapper' : 'post-wrapper'}>
      <Navbar />
      <div className="posts">
        {
          posts?.map(post => (
            <Link to={`/posts/${post.id}`} className="post" key={post.id}>
              <div>{post.title.length > 15 ? post.title.slice(0,15) + "..." : post.title}</div>
              <div>{post.text.length > 15 ? post.text.slice(0,15) + "..." : post.text}</div>
              <div className='color-2 post-date'>{post.createdAt.slice(0, 10)}</div>
            </Link>
          ))
        }
      </div>
      <button className='see-more-posts' type="button" onClick={() => { setN(n+t) }}>Ko'proq ko'rish</button>
      <Footer />
    </div>
  )
}

export default AllPosts
