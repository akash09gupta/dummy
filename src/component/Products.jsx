import { useEffect } from "react";
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import { Typography, useMediaQuery } from '@mui/material';
import Aos from "aos";

import { useNavigate } from "react-router-dom";

function Products() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const navigate = useNavigate();
  
  const productList = [
    { img: p1, name: "LILIA", price: "Rs. 9204.00" },
    { img: p2, name: "REMO", price: "Rs. 6204.00" },
    { img: p1, name: "KIME", price: "Rs. 9204.00" },
    { img: p2, name: "LILIA", price: "Rs. 2204.00" },
    { img: p1, name: "LILIA", price: "Rs. 9204.00" },
    { img: p2, name: "LILIA", price: "Rs. 9704.00" },
    { img: p1, name: "LILIA", price: "Rs. 7204.00" },
    { img: p2, name: "LILIA", price: "Rs. 9204.00" },
  ];

// useEffect(()=>{},[]) for further use to fetch products
  useEffect(()=>{
    Aos.init({
      duration:1000,
    });
    Aos.refresh();
  },[])

  const BuyProduct = (product) => {
    console.log(product);
    navigate('/BuyProduct', {state: {product}});
  }

  return (
    <div className="container mt-5 pt-5">
      {/* <Typography variant='h3' className='py-4 mt-0 ms-1 fw-bold'>Our Products</Typography> */}
      <Typography variant="h4" className="pb-4 ms-1 fw-normal d-flex align-items-center" >
        Our <span variant="h4" className="mt-0 fw-normal"  style={{ color: "#105B63", padding: "0 0.5rem" }}>Products</span>
      </Typography>
      <div className="row g-4 justify-content-center" >
        {productList.map((product, index) => (
          <div
            key={index}
            className={isMobile ? "col-6" : "col-md-3"}
            data-aos="fade-up"
          >
            <div className="card h-100" style={{ height: "33rem" }} onClick={()=>BuyProduct(product)}>
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
