import { useEffect, useState } from "react"
import { getProjects, Project } from './Api';
import '../css/allproducts.css'
import Navbar from "./Navbar";

const AllProducts = () => {
  let t = 9
  const [projects, setProjects] = useState<Project[]>([]);
  const [n, setN] = useState(t)
  
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects(n, true);
      setProjects(data);
    };
    fetchProjects();
  }, [n]);


  return (
    <aside className='products-page'>
      <Navbar />

      <div className="small-slides-variant-2">
        {projects.map((project, i) => (
          <a key={i} href="/product-info" className='landing-slide-small-variant-2 landing-slide-small-variant-2'>
            <img src={`data:image/jpeg;base64,${project.images[0]}`} alt="product image" />
            <div className="landing-slide-info">
              <h4 className="landing-slide-date">{project.createdAt.slice(0, 10)}</h4>
              <p className='landing-slide-title'>{project.name}</p>
              <p className='landing-slide-price'>{project.price}</p>
            </div>
          </a>
        ))}
      </div>
      <button type="button" onClick={() => { setN(n+t) }}>Ko'proq ko'rish</button>
      <button type="button" onClick={() => { setN(100000) }}>Hammasini ochish</button>
    </aside>
  )
}

export default AllProducts
