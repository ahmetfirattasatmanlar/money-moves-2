import Link from 'next/link'

export default function RecoverPassword() {
  return (
    <div>

      <div className="d-flex align-items-center justify-content-center py-2">
        <div className="w-25"><BackButton/></div>
        <div className="w-100"><img src="/logo-moneymoves.svg" alt="logo money moves"  className="img-fluid"/></div>
        <div className="w-25"></div>
      </div>

      Recovery Password
    </div>
  )
}
