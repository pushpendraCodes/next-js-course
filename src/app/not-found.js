import Link from "next/link"

export default function Notfound() {
  return (
    <div>
      <h2>Page not found </h2>
      <Link href="/"
      >Click here to go home</Link>
    </div>
  )
}
