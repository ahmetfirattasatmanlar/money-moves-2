import Link from 'next/link'

export default function Nav() {
  return (
    <div style={{position: 'fixed', bottom: 0}} className="w-100 bg-white p-4 d-flex justify-content-between">
      <Link href="/home">
        <a><small>Home</small></a>
      </Link>
      <Link href="/activity">
        <a><small>Activity</small></a>
      </Link>
      <Link href="/new-loan">
        <a><small>New Loan</small></a>
      </Link>
      <Link href="/applications">
        <a><small>Applications</small></a>
      </Link>
      <Link href="/profile">
        <a><small>Profile</small></a>
      </Link>
    </div>
  )
}
