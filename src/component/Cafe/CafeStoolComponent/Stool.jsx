import React from 'react'
import Office from "../../Office";
import desk1 from "../../../assets/CafeStoolImages/stool1.jpg";
import desk2 from "../../../assets/CafeStoolImages/stool2.jpg";
import desk3 from "../../../assets/CafeStoolImages/stool3.jpg";
import desk4 from "../../../assets/CafeStoolImages/stool4.jpg";
import desk5 from "../../../assets/CafeStoolImages/stool5.jpg";
import desk6 from "../../../assets/CafeStoolImages/stool6.jpg";
import desk7 from "../../../assets/CafeStoolImages/stool7.jpg";
import desk8 from "../../../assets/CafeStoolImages/stool8.jpg";
import desk9 from "../../../assets/CafeStoolImages/stool9.jpg";

export default function Stool() {
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
    ];
    return (
        <>
            <Office products={products} />
        </>
    )
}
