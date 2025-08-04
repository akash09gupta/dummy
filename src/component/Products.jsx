import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import { Typography, useMediaQuery } from '@mui/material';

function Products() {
  const isMobile = useMediaQuery('(max-width:600px)');
  
  const productList = [
    { img: p1, name: "LILIA", price: "Rs. 9204.00" },
    { img: p2, name: "LILIA", price: "Rs. 9204.00" },
    { img: p1, name: "LILIA", price: "Rs. 9204.00" },
    { img: p2, name: "LILIA", price: "Rs. 9204.00" },
    { img: p1, name: "LILIA", price: "Rs. 9204.00" },
    { img: p2, name: "LILIA", price: "Rs. 9204.00" },
    { img: p1, name: "LILIA", price: "Rs. 9204.00" },
    { img: p2, name: "LILIA", price: "Rs. 9204.00" },
  ];

//useEffect(()=>{},[]) for further use to fetch products

  return (
    <div className="container mt-5 pt-5">
      {/* <Typography variant='h3' className='py-4 mt-0 ms-1 fw-bold'>Our Products</Typography> */}
      <Typography variant="h3" className="py-4 mt-0 fw-bold d-flex align-items-center" >
        Our <Typography variant="h3" className="py-4 mt-0 fw-bold"  style={{ color: "#EC2227", padding: "0 0.5rem" }}>Products</Typography>
      </Typography>
      <div className="row g-4 justify-content-center">
        {productList.map((product, index) => (
          <div
            key={index}
            className={isMobile ? "col-6" : "col-md-3"}
          >
            <div className="card h-100" style={{ height: "33rem" }}>
              <img src={product.img} className="card-img-top" alt={product.name} />
              <div className="card-body text-center">
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>  
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
