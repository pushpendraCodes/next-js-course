import Link from "next/link";

const getProducts = async()=>{
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products

}

export default async function page () {
    let products = await getProducts()

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
  )
}
