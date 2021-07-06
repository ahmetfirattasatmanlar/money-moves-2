import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import validation from "../../scripts/validation";

import Link from "next/link";
import AppWrapper from "components/_common/app-wrapper";
import BackButton from "components/_common/back-button";
import { BsPlusCircle, BsDashCircle } from "react-icons/bs";

export default function Employment() {
    const [yearsOfEmployment, setYearsOfEmployment] = useState(0);
    const [monthsOfEmployment, setMonthsOfEmployment] = useState(0);
    const [formData, setFormData] = useState({});

    let defaultValues = {
        yearsOfEmployment: 0,
        monthsOfEmployment: 0,
    };

    const { register, handleSubmit } = useForm();

    const selectYears = (event) => {
        const target = event.target.value;

        if (target === "minus") {
            setYearsOfEmployment(yearsOfEmployment - 1);
        }

        if (target === "plus") {
            setYearsOfEmployment(yearsOfEmployment + 1);
        }
    };

    const selectMonths = (event) => {
        const target = event.target.value;

        if (target === "minus") {
            setMonthsOfEmployment(monthsOfEmployment - 1);
        }

        if (target === "plus") {
            setMonthsOfEmployment(monthsOfEmployment + 1);
        }
    };

    const onSubmit = (data) => setFormData(data);

    useEffect(() => {
        const keys = Object.keys(formData);
        if (keys.length > 0) {
            validation(formData);
        }
    }, [formData]);

    return (
        <AppWrapper>
            <div className="d-flex flex-column h-100">
                <div className="px-3 pb-3  d-flex justify-content-between align-items-center">
                    <BackButton />
                    <strong className="pr-4">Employment Verification</strong>
                    <span>&nbsp;</span>
                </div>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="px-3">
                        Complete the information of the company where you work
                        <div className="card border-0 shadow mt-4">
                            <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                                <label htmlFor="Company Name" className="m-0">
                                    Company Name
                                </label>
                            </div>
                            <div className="card-body p-0 rounded-bottom">
                                <input type="text" className="form-control px-3" name="Company Name" id="Company Name" placeholder="Money Moves" {...register("companyName")} />
                            </div>
                        </div>
                        <div className="card border-0 shadow mt-4">
                            <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                                <label htmlFor="Street Address" className="m-0">
                                    Street Address
                                </label>
                            </div>
                            <div className="card-body p-0 rounded-bottom">
                                <input type="text" className="form-control px-3" name="Street Address" id="Street Address" placeholder="Street Address" {...register("streetAddress")} />
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
                                        <input type="text" className="form-control px-3" name="City" id="City" placeholder="Vancouver" {...register("city")} />
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
                                    <div className="card-body p-0 rounded-bottom d-flex  align-items-center">
                                        <select name="State" id="State" className="form-control w-100" {...register("state")}>
                                            <option value="AB">AB</option>
                                            <option value="BC">BC</option>
                                            <option value="MB">MB</option>
                                            <option value="NB">NB</option>
                                            <option value="NL">NL</option>
                                            <option value="NT">NT</option>
                                            <option value="NS">NS</option>
                                            <option value="NU">NU</option>
                                            <option value="ON">ON</option>
                                            <option value="PE">PE</option>
                                            <option value="QC">QC</option>
                                            <option value="SK">SK</option>
                                            <option value="YT">YT</option>
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
                                <input type="text" className="form-control px-3" name="Postal Code" id="Postal Code" placeholder="A1B 2C4" {...register("postalCode")} />
                            </div>
                        </div>
                        <div className="mt-4 d-flex justify-content-around">
                            <div className="d-flex flex-column align-items-center">
                                <label htmlFor="Years">Year Worked Here</label>
                                <div className="h2 d-flex justify-content-center">
                                    {/* <button type="button" className="d-flex justify-content-center align-items-center flex-column btn p-0 m-0" value="minus" disabled={yearsOfEmployment <= 0} onClick={selectYears}>
                                        <BsDashCircle className="m-2 w-100 h-100 pe-none" />
                                    </button> */}
                                    <input type="number" className="mx-4 w-50 text-center" placeholder="0" {...register("yearsOfEmployment")} />
                                    {/* <button type="button" className="d-flex justify-content-center align-items-center flex-column btn p-0 m-0" value="plus" onClick={selectYears}>
                                        <BsPlusCircle className="m-2 w-100 h-100 pe-none" />
                                    </button> */}
                                </div>
                            </div>

                            <div className="d-flex flex-column align-items-center">
                                <label htmlFor="Years">Months Worked Here</label>
                                <div className="h2 d-flex justify-content-center">
                                    {/* <button type="button" className="d-flex justify-content-center align-items-center flex-column btn p-0 m-0" value="minus" disabled={monthsOfEmployment <= 0} onClick={selectMonths}>
                                        <BsDashCircle className="m-2 w-100 h-100 pe-none" />
                                    </button> */}
                                    {/* <span className="mx-4">{monthsOfEmployment}</span> */}
                                    <input type="number" className="mx-4 w-50 text-center" placeholder="0" {...register("monthsOfEmployment")} />
                                    {/* <button type="button" className="d-flex justify-content-center align-items-center flex-column btn p-0 m-0" value="plus" disabled={monthsOfEmployment >= 12} onClick={selectMonths}>
                                        <BsPlusCircle className="m-2 w-100 h-100 pe-none" />
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-auto px-2 pb-4">
                        <button type="submit" className="btn btn-primary btn-block rounded-lg">
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </AppWrapper>
    );
}
