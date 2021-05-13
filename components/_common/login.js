import Link from 'next/link'

export default function Login() {
  return (
    <div>
      <img src="/logo-moneymoves.svg" />

      Don't have an account?
      <Link href="/register">
        <a>Register</a>
      </Link>


      <Link href="/recover-password">
        <a>Forgot Password</a>
      </Link>

      <Link href="/home">
        <a>Sign In</a>
      </Link>


    </div>

  )
}
