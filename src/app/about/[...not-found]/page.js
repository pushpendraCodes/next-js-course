import Link from 'next/link'
export default function AboutNotFound() {
  return (
    <div>
      <h2 style={{textAlign:"center"}}>This page not found in about section </h2>
      <Link href="/about">Back to About page</Link>
    </div>
  )
}
