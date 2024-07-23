import { useEffect, useState } from 'react'
import { API } from '../../Export'
import { Link } from 'react-router-dom';

export interface Post {
  id: number,
  title: string,
  text: string,
  createdAt: string;
}

const Post = () => {
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
  }, [])
  return (
    <div>
      {
        posts?.map(post => (
          <Link to={`/posts/${post.id}`} className="post" key={post.id}>
            <div>{post.title.length > 15 ? post.title.slice(0,15) + "..." : post.title}</div>
            <div>{post.text.length > 15 ? post.text.slice(0,15) + "..." : post.text}</div>
            <div className='color-2'>{post.createdAt.slice(0, 10)}</div>
          </Link>
        ))
      }
      <a href='/posts' className='view-more'>Hammasini Ko'rish</a>
    </div>
  )
}

export default Post
