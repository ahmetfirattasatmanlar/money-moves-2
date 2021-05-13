import Link from 'next/link'

export default function Nav() {
  return (
    <div>
      <Link href="/home">
        <a>Home</a>
      </Link>
      <Link href="/activity">
        <a>Activity</a>
      </Link>
      <Link href="/new-loan">
        <a>New Loan</a>
      </Link>
      <Link href="/applications">
        <a>Applications</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
    </div>
  )
}
