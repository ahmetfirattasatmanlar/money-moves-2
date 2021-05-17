import Link from 'next/link'

export default function Verify() {
  return (
    <div>
      <Link href="/profile">
        <a>Back</a>
      </Link>
      Verify


      <Link href="/verify/mobile">
        <a className="card">Mobile Phone</a>
      </Link>
      <Link href="/verify/government-id">
        <a className="card">Government ID</a>
      </Link>
      <Link href="/verify/banking">
        <a className="card">Banking Information</a>
      </Link>
      <Link href="/verify/employment">
        <a className="card">Employment Verification</a>
      </Link>
      <Link href="/verify/photo">
        <a className="card">Selfie Photo</a>
      </Link>

    </div>
  )
}
