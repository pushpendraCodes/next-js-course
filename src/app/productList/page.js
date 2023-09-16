"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function product() {
  const [products, setproducts] = useState([]);
  useEffect(async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    console.log(data.products)
    setproducts(data.products);
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}> productList</h2>
      <Link href="/">Go to Home</Link>

      {
        products?.map((item,i)=>{
           return(
            <div >

           <p>    {i+1}&nbsp;{item.title}- {item.price}$</p>
            </div>
           )
        })
      }
    </div>
  );
}
