

import Image from 'next/image'
import next from "../../../public/next.svg"
import vercel from "../../../public/vercel.svg"
export default function page() {
  return (
    <div>
    <Image  src={vercel}  />
    <img src="vercel.svg" alt="jj" />
    </div>
  )
}
