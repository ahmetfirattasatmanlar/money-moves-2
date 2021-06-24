import { useState, Fragment } from "react";
import AppWrapper from "components/_common/app-wrapper";
import BackButton from "components/_common/back-button";
import VerificationInput from "react-verification-input";

export default function Mobile() {
    const [confirm, setConfirm] = useState(false);
    const [phone, setPhone] = useState("");

    const getPhone = (event) => {
        const phoneNumber = event.target.value;
        const formated = `(${phoneNumber.substr(0, 3)}) ${phoneNumber.substr(3, 3)}-${phoneNumber.substr(6, 4)}`;
        setPhone(formated);
    };

    return (
        <AppWrapper>
            <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
                <div className="px-3">
                    <BackButton />
                </div>
                <div className="px-3">
                    {!confirm ? (
                        <Fragment>
                            <div className="text-center py-4">
                                {" "}
                                <img src="/img-register.svg" alt="Register account with money moves" />
                            </div>
                            <h1 className="h3">Get the code</h1>
                            <p>Simply enter your phone number and we will send a code to confirm It.</p>

                            <div className="mt-5">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="(562) 859-4936" onChange={getPhone} />
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div className="text-center py-4">
                                {" "}
                                <img src="/img-create-password.svg" alt="Recover password" />
                            </div>
                            <h1 className="h3 font-weight-bold">Confirm</h1>
                            <p>Please enter the 4-digit code just sent to {phone}</p>

                            <div className="mt-5 row d-flex justify-content-center">
                                <VerificationInput length={4} />

                                {/* <div className="col">
                                    <input type="number" min={0} max={9} className="form-control shadow-sm" style={{ height: "5rem" }} id="number1" aria-describedby="number1" />
                                </div>
                                <div className="col">
                                    <input type="number" min={0} max={9} className="form-control shadow-sm" style={{ height: "5rem" }} id="number2" aria-describedby="number2" />
                                </div>
                                <div className="col">
                                    <input type="number" min={0} max={9} className="form-control shadow-sm" style={{ height: "5rem" }} id="number3" aria-describedby="number3" />
                                </div>
                                <div className="col">
                                    <input type="number" min={0} max={9} className="form-control shadow-sm" style={{ height: "5rem" }} id="number4" aria-describedby="number4" />
                                </div> */}
                            </div>
                        </Fragment>
                    )}
                </div>
                <div className="mt-auto px-2 pb-4">
                    {!confirm ? (
                        <button className="btn btn-primary btn-block rounded-lg" disabled={phone.length < 14 ? true : false} onClick={() => setConfirm(true)}>
                            Continue
                        </button>
                    ) : (
                        <button className="btn btn-link text-primary btn-block">Resend code in 00:56</button>
                    )}
                </div>
            </div>
        </AppWrapper>
    );
}
