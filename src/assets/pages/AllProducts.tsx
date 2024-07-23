import { useEffect, useState } from "react"
import { getProjects, Project } from './Api';
import '../css/allproducts.css'
import Navbar from "./Navbar";
import Product from "./Product";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const AllProducts = () => {
  let t = 10
  const [projects, setProjects] = useState<Project[]>([]);
  const [n, setN] = useState(t)
  
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects(n, true);
      setProjects(data);
    };
    fetchProjects();
  }, [n]);
  
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('darkTheme') === 'false') {
      setDarkTheme(false)
    } else {
      setDarkTheme(true)
    }
  })

  return (
    <section className="products-page-container">
      <Navbar />
      <aside className={darkTheme ? 'dark-theme products-page' : 'products-page'}>

        <div className="small-slides-variant-2 all-products">
          {projects.map((project) => (
            <Link to={`/all-products/${project.id}`} key={project.id}>
              <Product project={project}/>
            </Link>
          ))}
        </div>
        <button type="button" onClick={() => { setN(n+t) }}>Ko'proq ko'rish</button>
      <Footer />
      </aside>
    </section>
  )
}

export default AllProducts
