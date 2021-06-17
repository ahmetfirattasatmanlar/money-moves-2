import { useState } from "react";
import Link from "next/link";
import AppWrapper from "components/_common/app-wrapper";
import BackButton from "components/_common/back-button";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";

export default function Employment() {
    const [yearsOfEmployment, setYearsOfEmployment] = useState(0);
    const [company, setCompany] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postalCode, setPostalcode] = useState("");

    const fillCompany = (event) => {
        setCompany(event.target.value);
    };

    const fillCity = (event) => {
        setCity(event.target.value);
    };

    const fillStreet = (event) => {
        setStreet(event.target.value);
    };

    const fillPostalCode = (event) => {
        setPostalcode(event.target.value);
    };

    const fillState = (event) => {
        setState(event.target.value);
    };

    const getBtnStatus = () => {
        const isValidForm = company && city && street && state && postalCode && yearsOfEmployment;
        console.log(isValidForm);
        return isValidForm ? false : true;
    };

    const selectYears = (event) => {
        const target = event.target.value;

        if (target === "minus") {
            setYearsOfEmployment(yearsOfEmployment - 1);
        }

        if (target === "plus") {
            setYearsOfEmployment(yearsOfEmployment + 1);
        }
    };

    return (
        <AppWrapper>
            <div className="d-flex flex-column h-100">
                <div className="px-3 pb-3  d-flex justify-content-between align-items-center">
                    <BackButton />
                    <strong className="pr-4">Employment Verification</strong>
                    <span>&nbsp;</span>
                </div>
                <div className="px-3">
                    Complete the information of the company where you work
                    <div className="card border-0 shadow mt-4">
                        <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                            <label htmlFor="Company Name" className="m-0">
                                Company Name
                            </label>
                        </div>
                        <div className="card-body p-0 rounded-bottom">
                            <input type="text" className="form-control px-3" name="Company Name" id="Company Name" placeholder="Money Moves" value={company} onChange={fillCompany} />
                        </div>
                    </div>
                    <div className="card border-0 shadow mt-4">
                        <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                            <label htmlFor="Street Address" className="m-0">
                                Street Address
                            </label>
                        </div>
                        <div className="card-body p-0 rounded-bottom">
                            <input type="text" className="form-control px-3" name="Street Address" id="Street Address" placeholder="Street Address" value={street} onChange={fillStreet} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col ">
                            <div className="card border-0 shadow mt-4">
                                <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                                    <label htmlFor="City" className="m-0">
                                        City
                                    </label>
                                </div>
                                <div className="card-body p-0 rounded-bottom">
                                    <input type="text" className="form-control px-3" name="City" id="City" placeholder="Vancouver" value={city} onChange={fillCity} />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card border-0 shadow mt-4">
                                <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                                    <label htmlFor="State" className="m-0">
                                        State
                                    </label>
                                </div>
                                <div className="card-body py-0 pl-0 pr-3 rounded-bottom d-flex  align-items-center">
                                    <select name="State" id="State" className="form-control" value={state} onChange={fillState}>
                                        <option value="AB">AB</option>
                                        <option value="CD">CD</option>
                                        <option value="EF">EF</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card border-0 shadow mt-4">
                        <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                            <label htmlFor="Postal Code" className="m-0">
                                Postal Code
                            </label>
                        </div>
                        <div className="card-body p-0 rounded-bottom">
                            <input type="text" className="form-control px-3" name="Postal Code" id="Postal Code" placeholder="34562" value={postalCode} onChange={fillPostalCode} />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="Years">Year Worked Here</label>
                        <div className="h2 d-flex align-items-center">
                            <button type="button" className="d-flex justify-content-center align-items-center flex-column btn p-0 m-0" value="minus" disabled={yearsOfEmployment <= 0} onClick={selectYears}>
                                <BsPlusCircle className="m-2 w-100 h-100 pe-none" />
                            </button>
                            <span className="mx-4">{yearsOfEmployment}</span>
                            <button type="button" className="d-flex justify-content-center align-items-center flex-column btn p-0 m-0" value="plus" onClick={selectYears}>
                                <BsDashCircle className="m-2 w-100 h-100 pe-none" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-auto px-2 pb-4">
                    <Link href="/verify">
                        <button disabled={getBtnStatus()} className="btn btn-primary btn-block rounded-lg">
                            Confirm
                        </button>
                    </Link>
                </div>
            </div>
        </AppWrapper>
    );
}
