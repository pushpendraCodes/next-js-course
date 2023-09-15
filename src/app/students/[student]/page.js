"use client"

const Student = ({params}) => {
    console.log(params)
  return (
    <div>
student name:&nbsp;{params.student}
    </div>
  )
}

export default Student
