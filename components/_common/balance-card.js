import Link from "next/link";

export default function LoanCard(props) {
    return (
        <div className="d-flex flex-column align-items-center">
            <p className="mb-2 h6">Loan Balance</p>
            <p className="h1">$14,920.00</p>
            <Link href="/new-loan">
                <a className="btn btn-outline-light btn-sm mt-2 px-3 py-2 border-light rounded-lg">Get a new loan now</a>
            </Link>
        </div>
    );
}
