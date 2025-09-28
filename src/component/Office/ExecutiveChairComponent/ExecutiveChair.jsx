import React from 'react'
import Office from "../../Office";
import desk1 from "../../../assets/ExecutiveChairImages/chair1.jpg";
import desk2 from "../../../assets/ExecutiveChairImages/chair2.jpg";
import desk3 from "../../../assets/ExecutiveChairImages/chair3.jpg";
import desk4 from "../../../assets/ExecutiveChairImages/chair4.jpg";
import desk5 from "../../../assets/ExecutiveChairImages/chair5.jpg";
import desk6 from "../../../assets/ExecutiveChairImages/chair6.jpg";
import desk7 from "../../../assets/ExecutiveChairImages/chair7.jpg";
import desk8 from "../../../assets/ExecutiveChairImages/chair8.jpg";
import desk9 from "../../../assets/ExecutiveChairImages/chair9.jpg";

export default function ExecutiveChair() {
    const products = [
        { id: 1, name: "", image: desk1 },
        { id: 2, name: "", image: desk2 },
        { id: 3, name: "", image: desk3 },
        { id: 4, name: "", image: desk4 },
        { id: 1, name: "", image: desk1 },
        { id: 2, name: "", image: desk2 },
        { id: 3, name: "", image: desk3 },
        { id: 4, name: "", image: desk4 },
        { id: 1, name: "", image: desk1 },
        { id: 2, name: "", image: desk2 },
        { id: 3, name: "", image: desk3 },
        { id: 4, name: "", image: desk4 },
        { id: 1, name: "", image: desk1 },
        { id: 2, name: "", image: desk2 },
        { id: 3, name: "", image: desk3 },
        { id: 4, name: "", image: desk4 },
        { id: 1, name: "", image: desk1 },
        { id: 2, name: "", image: desk2 },
        { id: 3, name: "", image: desk3 },
        { id: 4, name: "", image: desk4 },
        { id: 1, name: "", image: desk1 },
        { id: 2, name: "", image: desk2 },
        { id: 3, name: "", image: desk3 },
        { id: 4, name: "", image: desk4 },
        { id: 1, name: "", image: desk1 },
        { id: 2, name: "", image: desk2 },
        { id: 3, name: "", image: desk3 },
        { id: 4, name: "", image: desk4 },
        { id: 5, name: "", image: desk5 },
        { id: 6, name: "", image: desk6 },
        { id: 7, name: "", image: desk7 },
        { id: 8, name: "", image: desk8 },
        { id: 9, name: "", image: desk9 },
    ];
    return (
        <>
            <Office products={products} />
        </>
    )
}
