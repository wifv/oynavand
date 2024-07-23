import { useEffect, useState } from "react"
import { getProjects, Project } from './Api';
import '../css/products.css'


const Products = ({darkTheme}: any) => {
  const [projects, setProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects(1000000, true);
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <aside className={darkTheme ? 'products-page dark-theme' : 'products-page'}>
      <div className="small-slides-variant-2">
        {projects.slice(9, 12).map((project, i) => (
          <a key={i} href="/product-info" className='landing-slide-small-variant-2 landing-slide-small-variant-2'>
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
          </a>
        ))}
      </div>
      <a href='/all-products' className='view-more'>Hammasini ko'rish</a>
    </aside>
  )
}

export default Products
