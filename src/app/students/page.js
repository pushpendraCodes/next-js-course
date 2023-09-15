
"use client"

import Link from "next/link"

const page = () => {
    let students = ["abhishek" ,"shivam","akhilesh","nikhil","vikash"]
  return (
    <div>
    <h3 style={{textAlign:"center"}}>Student List-</h3>
      {students.map((item)=>{
        return(
            <ul>
               <Link style={{textDecoration:"none"}} href={`students/${item}`} >{item}</Link>
            </ul>
        )
      })}

    </div>
  )
}

export default page
