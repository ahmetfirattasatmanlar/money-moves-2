import { useRouter } from "next/router"
import { IoIosArrowBack } from 'react-icons/io'

export default function BackButton() {
  const router = useRouter()

  return (
    <button onClick={() => router.back()} className="btn btn-link text-dark"><IoIosArrowBack/></button>
  )
}
