import Link from "next/link"


const page = () => {
  return (
    <div>
      <h3>about page</h3>
      <Link href="/">
        Go to Home
      </Link>
    </div>
  )
}

export default page
