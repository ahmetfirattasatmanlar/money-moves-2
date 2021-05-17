import Link from 'next/link'

export default function Photo() {
  return (
    <div>
      <Link href="/verify">
        <a>Back</a>
      </Link>
      Verify Selfie Photo
    </div>
  )
}
