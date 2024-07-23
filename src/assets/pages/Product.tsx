import '../css/global.css';

const Product = ({project}: any) => {

  return (
    <div className='landing-slide-small-variant-2'>
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
    </div>
  );
};

export default Product;
