import React from 'react'
import Office from "../../Office";
import desk1 from "../../../assets/ChairImages/chair1.jpg";
import desk2 from "../../../assets/ChairImages/chair2.jpg";
import desk3 from "../../../assets/ChairImages/chair3.jpg";
import desk4 from "../../../assets/ChairImages/chair4.jpg";
import desk5 from "../../../assets/ChairImages/chair5.jpg";
import desk6 from "../../../assets/ChairImages/chair6.jpg";
import desk7 from "../../../assets/ChairImages/chair7.jpg";
import desk8 from "../../../assets/ChairImages/chair8.jpg";
import desk9 from "../../../assets/ChairImages/chair9.jpg";

export default function Chair() {
    const products = [
        { id: 1, name: "", image: desk1 },
        { id: 2, name: "", image: desk2 },
        { id: 3, name: "", image: desk3 },
        { id: 4, name: "", image: desk4 },
        { id: 5, name: "", image: desk5 },
        { id: 6, name: "", image: desk6 },
        { id: 7, name: "", image: desk7 },
        { id: 8, name: "", image: desk8 },
        { id: 9, name: "", image: desk9 },
        { id: 10, name: "", image: desk7 },
        { id: 11, name: "", image: desk8 },
        { id: 9, name: "", image: desk9 },
        { id: 7, name: "", image: desk7 },
        { id: 8, name: "", image: desk8 },
        { id: 9, name: "", image: desk9 },
        { id: 7, name: "", image: desk7 },
        { id: 8, name: "", image: desk8 },
        { id: 9, name: "", image: desk9 },
        { id: 7, name: "", image: desk7 },
        { id: 8, name: "", image: desk8 },
        { id: 9, name: "", image: desk9 },
        { id: 7, name: "", image: desk7 },
        { id: 8, name: "", image: desk8 },
        { id: 9, name: "", image: desk9 },
        { id: 7, name: "", image: desk7 },
        { id: 8, name: "", image: desk8 },
        { id: 9, name: "", image: desk9 },
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
