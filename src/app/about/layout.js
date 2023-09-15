"useclient"
import Link from "next/link"

import "./about.css"
import Footer from "./Footer"

// this is common layout for about us
const Layout = ({children}) => {
  return (
    <div>
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
     </ul>
     {children}


    </div>
  )
}

export default Layout;
