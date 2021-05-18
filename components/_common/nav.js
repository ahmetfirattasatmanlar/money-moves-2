import Link from 'next/link'

export default function Nav() {
  return (
    <div style={{position: 'fixed', bottom: 0, height: "100px"}} className="w-100 bg-white p-4 d-flex justify-content-between shadow-lg">
      
      <Link href="/home">
        <div className="d-flex flex-column justify-content-end align-items-center">
          <img src="/home.svg" className="w-75"/>
          <a><small>Home</small></a>
        </div>
      </Link>
      
      <Link href="/activity">
        <div className="d-flex flex-column justify-content-end align-items-center">
          <img src="/activity.svg" className="w-75"/>
          <a><small>Activity</small></a>
        </div>
      </Link>

      
      <Link href="/new-loan">
        <div className="d-flex flex-column justify-content-end align-items-center">
          <div style={{marginTop: "-10px", backgroundColor: "#ffffff"}} className="rounded-circle d-flex flex-column justify-content-end align-items-center">
            <img src="/newLoan.svg"/>
          </div>
          <a><small>New Loan</small></a>
        </div>
      </Link>

      
      <Link href="/applications">
        <div className="d-flex flex-column justify-content-end align-items-center">
          <img src="applications.svg" className="w-50"/>
          <a><small>Applications</small></a>
        
        </div>
      </Link>
      
      <Link href="/profile">
          <div className="d-flex flex-column justify-content-end align-items-center">
          <img src="profile.svg" className="w-75"/>
          <a><small>Profile</small></a>
        </div>
      </Link>
    </div>
  )
}
