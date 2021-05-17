import Link from 'next/link'

export default function Banking() {
  return (
    <div>
      <Link href="/verify">
        <a>Back</a>
      </Link>
      Verify Banking Info
    </div>
  )
}
