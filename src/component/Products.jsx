import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import { useMediaQuery } from '@mui/material';

function Products() {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <>
        {isMobile ? (
            <div className="w-100 d-flex gap-2 justify-content-center align-items-center">
        <div className="card" style={{width:"18rem", height:"33rem"}}>
            <img src={p1} className="card-img-top" alt="..."/>
            <div className="card-body text-center   ">
            <p>LILIA</p>
            <p>Rs. 9204.00</p>
            </div>
        </div>
        <div className="card" style={{width:"18rem", height:"33rem"}}>
            <img src={p2} className="card-img-top" alt="..."/>
            <div className="card-body text-center   ">
            <p>LILIA</p>
            <p>Rs. 9204.00</p>
            </div>
        </div>
        </div>
        ) : (
            <div className="w-100 d-flex gap-2 justify-content-center align-items-center">
        <div className="card" style={{width:"18rem", height:"33rem"}}>
            <img src={p1} className="card-img-top" alt="..."/>
            <div className="card-body text-center   ">
            <p>LILIA</p>
            <p>Rs. 9204.00</p>
            </div>
        </div>
        <div className="card" style={{width:"18rem", height:"33rem"}}>
            <img src={p2} className="card-img-top" alt="..."/>
            <div className="card-body text-center   ">
            <p>LILIA</p>
            <p>Rs. 9204.00</p>
            </div>
        </div>
        <div className="card" style={{width:"18rem", height:"33rem"}}>
            <img src={p1} className="card-img-top" alt="..."/>
            <div className="card-body text-center   ">
            <p>LILIA</p>
            <p>Rs. 9204.00</p>
            </div>
        </div>
        <div className="card" style={{width:"18rem", height:"33rem"}}>
            <img src={p2} className="card-img-top" alt="..."/>
            <div className="card-body text-center   ">
            <p>LILIA</p>
            <p>Rs. 9204.00</p>
            </div>
        </div>
        </div>
        )}
        </>
    )
}
export default Products;