import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
    const route = useRouter();

    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                maxWidth: "26.56rem",
            }}
            className="col-sm-6 pb-2 bg-white px-3 d-flex align-items-end justify-content-between shadow-lg"
        >
            <Link href="/home">
                <div className="d-flex flex-column justify-content-center  align-items-center ">
                    <img src={route.pathname === "/home" ? "/homeActive.svg" : "/home.svg"} />
                    <a>
                        <small>Home</small>
                    </a>
                </div>
            </Link>

            <Link href="/activity" className="active">
                <div className="d-flex flex-column justify-content-center  align-items-center ">
                    <img src={route.pathname === "/activity" ? "/activityActive.svg" : "/activity.svg"} />
                    <a>
                        <small>Activity</small>
                    </a>
                </div>
            </Link>

            <Link href="/new-loan">
                <div className="d-flex flex-column  align-items-center">
                    <div className="rounded-circle mt-neg-lg d-flex flex-column justify-content-end align-items-center">
                        <span className="bg-white rounded-circle p-2">
                            <img src="/icon-btn-new.svg" className="rounded-circle" style={{ boxShadow: "0 .3rem .7rem rgba(23,97,197,.7)" }} />
                        </span>
                    </div>
                    <a>
                        <small>New Loan</small>
                    </a>
                </div>
            </Link>

            <Link href="/applications">
                <div className="d-flex flex-column justify-content-center  align-items-center ">
                    <img src={route.pathname === "/applications" ? "/applicationsActive.svg" : "/applications.svg"} />
                    <a>
                        <small>Application</small>
                    </a>
                </div>
            </Link>

            <Link href="/profile">
                <div className="d-flex flex-column justify-content-center  align-items-center ">
                    <img src={route.pathname === "/profile" ? "/profileActive.svg" : "/profile.svg"} />
                    <a>
                        <small>Profile</small>
                    </a>
                </div>
            </Link>
        </div>
    );
}
