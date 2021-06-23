import { useState } from "react";
import Link from "next/link";
import AppWrapper from "components/_common/app-wrapper";
import Amount from "components/_common/amount";
import TransferCard from "components/_common/transfer-card";
import TopBar from "components/_common/top-bar";

export default function Transfer() {
    const [sent, setSent] = useState(false);

    return (
        <AppWrapper dark>
            <div className="text-white text-center d-flex flex-column h-100">
                <TopBar dark />
                <div className="px-3">
                    {!sent ? (
                        <>
                            <h4 className="text-center mb-5">Send money</h4>
                            <div>AMOUNT</div>
                            <Amount defaultValue={10000} />
                            <p className="text-white mt-5">To Bank</p>
                            <TransferCard selectable />
                        </>
                    ) : (
                        <>
                            <img src="/money-sent.svg" alt="" />
                            <p className="h4 font-weight-bold mt-5">Money Sent</p>
                            <p>We have sent the money to your bank account</p>
                            <TransferCard />
                            <div className="text-white d-flex flex-column align-items-center m-4">
                                <p className="mt-2 mb-0">Transfer Amount</p>
                                <p className="h2 font-weight-bold mb-1">$360.00</p>
                                <p>
                                    <small>Nov 24, 2020 - 9:48 AM</small>
                                </p>
                            </div>
                        </>
                    )}
                </div>
                <div className="mt-auto px-3 pt-2 pb-4">
                    {!sent ? (
                        <button className="btn btn-primary rounded-lg btn-block" onClick={() => setSent(true)}>
                            Transfer funds
                        </button>
                    ) : (
                        <>
                            <Link href="/home">
                                <a className="btn rounded-lg btn-outline-light btn-block">Back To Home</a>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </AppWrapper>
    );
}
