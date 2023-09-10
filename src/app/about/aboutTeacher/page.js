import Link from "next/link"

// this is the nested page for about page - /about/aboutTeacher
const AboutTeacherPage = () => {
  return (
    <div>
      <h3>about page for Teacher</h3>
      <Link href="/">
        Go to Home
      </Link>
    </div>
  )
}

export default AboutTeacherPage
