import { useRouter } from "next/router"
import { IoIosArrowBack } from 'react-icons/io'

export default function BackButton({ dark = false }) {

  console.log(dark)
  const router = useRouter()

  return (
    <button onClick={() => router.back()} className={`btn btn-link pl-0 ${dark ? 'text-white' : 'text-dark'}`}><IoIosArrowBack /></button>
  )
}
