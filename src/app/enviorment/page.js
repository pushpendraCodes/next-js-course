
"use client"

import { API_URL } from "@/config/constant"

const page = () => {
    console.log(process.env.NODE_ENV)
  return (
    <div>
         {
        process.env.NODE_ENV=="development"?
        <h1>You are on development Mode</h1>
        :
        <h1>You are on Production Mode</h1>
      }
      <h1>Environment Variables in Next js </h1>

        <h2>{API_URL}</h2>

    </div>
  )
}

export default page
