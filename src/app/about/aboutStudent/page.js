import Link from "next/link"

// this is the nested page for about page - /about/aboutStudent
const AboutStudentPage = () => {
  return (
    <div>
      <h3>about page for Student</h3>
      <Link href="/">
        Go to Home
      </Link>
    </div>
  )
}

export default AboutStudentPage
