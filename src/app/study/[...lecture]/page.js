"use client"

const Lectures = ({params}) => {
    console.log(params)
  return (
    <div>
<h2 style={{textAlign:"center"}}>{params.lecture[0]}</h2>
<h2 style={{textAlign:"center"}}>{params.lecture[1]}</h2>
    </div>
  )
}

export default Lectures;
