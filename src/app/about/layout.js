"use client"
import Link from "next/link"

import "./about.css"
import Footer from "./Footer"
import { usePathname } from "next/navigation"

// this is common layout for about us


const Layout = ({children}) => {
  let pathname = usePathname()
  return (
    <div>

    {
      pathname !== "/about/aboutStudent" ?

     <ul className="links">
        <li>
            <h2 style={{margin:0}} >School</h2>

        </li>
        <li>
            <Link href="/" >Home</Link>

        </li>
        <li>
            <Link href="/about/aboutTeacher" >About Teacher</Link>

        </li>

        <li>
            <Link href="/about/aboutStudent" >About Student</Link>

        </li>
     </ul> : <Link href="/about" >go to about page</Link> }
     {children}


    </div>
  )
}

export default Layout;
