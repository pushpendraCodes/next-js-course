import React from 'react'
import custom from "./custom.module.css"
import other from "../Style/other.module.css"
export default function page() {
  return (
    <div>
      <h2 className={custom.main} >css module</h2>
      <h2 className={other.main} >css module</h2>
      <h2  >css module</h2>
    </div>
  )
}
