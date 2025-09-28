// BuyProduct.jsx
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function BuyProductPage() {
    const location = useLocation();
    const { product } = location.state || {}; // product contains { img, name, price }

    const isMobile = useMediaQuery('(max-width:600px)');

    const [quantity, setQuantity] = useState(0);

    return (
        <div>
            <div style={{ width: "100%", backgroundColor: "lightgray", padding: 30 }}>
                <h1 style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}>Shop</h1>
            </div>
            <div style={{ padding:35 }}>
                {product ? (
                    <>
                        <div style={{ display: "flex", gap: 50, width: "90%", flexDirection: isMobile ? "column" : "", }}>
                            <img src={product.img} alt={product.name} style={{ width: isMobile ? "95%" : "35%", height: "450px", borderRadius: 20 }} />
                            <div style={{ marginTop: 30 }}>
                                <p style={{ fontWeight: "normal", color: "gray" }}>Chair</p>
                                <div style={{ display: "flex", gap: 20 }}>
                                    <h2>{product.name}</h2>
                                    <p style={{ display: "flex", marginTop: 5, backgroundColor: "lightgreen", fontSize: 12, borderRadius: 30, padding: 10, textAlign: "center", alignItems: "center" }}>In Stock</p>
                                </div>
                                <p>{product.price}</p>
                                <p style={{fontSize:isMobile ? 10 : 14}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam, quis ipsa aperiam dolore et aliquam eius adipisci nisi omnis dolor maiores aspernatur aliquid repellat iusto. Tempore blanditiis exercitationem ab.
                                    Repellat odit rem obcaecati dolorem! Amet modi repellat iusto consectetur consequatur similique, maxime maiores nobis, numquam quibusdam dolor nesciunt, quia itaque architecto dicta eligendi nemo fugiat expedita dolore est fugit.</p>
                                <p>Quantity</p>
                                <div style={{ display: "flex", gap: 10,alignItems:"center" , border:"2px solid black", width:isMobile ? "45%" : "15%", borderRadius:20, justifyContent:"center"}}>
                                    <button className="btn " onClick={()=>setQuantity(quantity + 1)}>+</button>
                                    <h5 style={{ paddingTop:5, fontWeight:"normal"}}>{quantity}</h5>
                                    <button className="btn " onClick={()=>setQuantity(quantity - 1)}>-</button>
                                </div>
                                    <div style={{display:"flex", gap:10}}>
                                        <button className="btn btn-warning mt-3 ">Add to Cart</button>
                                    <button className="btn btn-success mt-3 p-2 ">Buy Now</button>
                                    </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>No product selected</p>
                )}
            </div>
        </div>
    );
}

export default BuyProductPage;
