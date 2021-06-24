import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import validation from "../../scripts/validation";

import Link from "next/link";
import AppWrapper from "components/_common/app-wrapper";
import BackButton from "components/_common/back-button";
import UploadFile from "components/_common/upload-file";
import { FaChevronRight, FaCheck } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { ImCloudUpload, ImCamera } from "react-icons/im";

export default function GovernmentId() {
    const [onSlide, setOnSlide] = useState(false);
    const [checkQuality, setCheckQuality] = useState(false);
    const [newPassport, setNewPassport] = useState(false);
    const [takePicture, setTakePicture] = useState(false);
    const [uploaded, setUploaded] = useState(null);
    const [formData, setFormData] = useState(null);

    const route = useRouter();

    const { register, handleSubmit } = useForm();

    const getFileName = (event) => {
        const target = event.target.value;
        const split = target.split("\\");
        const value = split[split.length - 1];

        setUploaded(value);
    };

    const onSubmit = (data) => setFormData(data);

    useEffect(() => {
        if (formData) {
            validation(formData);
            route.push("/verify");
        }
    }, [formData]);

    return (
        <AppWrapper>
            {!takePicture && !checkQuality ? (
                <div className="d-flex flex-column h-100">
                    <div className="px-3 pb-3  d-flex justify-content-between align-items-center">
                        <BackButton />
                        <strong className="pr-4">Government ID Verification</strong>
                        <span>&nbsp;</span>
                    </div>
                    <div className="px-3 pb-bottom-app">
                        Complete the form and upload a photo of your passport or driver's license.
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col ">
                                    <div className="card border-0 shadow mt-4">
                                        <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                                            <label htmlFor="First Name" className="m-0">
                                                First Name
                                            </label>
                                        </div>
                                        <div className="card-body p-0 rounded-bottom">
                                            <input type="text" className="form-control px-3" name="First Name" id="First Name" placeholder="John" {...register("firstName")} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card border-0 shadow mt-4">
                                        <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                                            <label htmlFor="Last Name" className="m-0">
                                                Last Name
                                            </label>
                                        </div>
                                        <div className="card-body p-0 rounded-bottom d-flex align-items-center">
                                            <div className="card-body p-0 rounded-bottom">
                                                <input type="text" className="form-control px-3 w-100" name="Last Name" id="Last Name" placeholder="Connor" {...register("lasttName")} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <div className="card border-0 shadow mt-4">
                                        <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                                            <label htmlFor="Date of Birth" className="m-0">
                                                Date of Birth
                                            </label>
                                        </div>
                                        <div className="card-body p-0 rounded-bottom">
                                            <input type="date" className="form-control px-3" name="Date of Birth" id="Date of Birth" {...register("birthDate")} />
                                        </div>
                                    </div>
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
                                            <select name="State" id="State" className="form-control" {...register("state")}>
                                                <option hidden></option>
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
                            <div className="card border-0 shadow mt-4 mb-4">
                                <div className="card-header border-0 bg-transparent pb-0 pt-2 px-3 rounded-top">
                                    <label htmlFor="Postal Code" className="m-0">
                                        Postal Code
                                    </label>
                                </div>
                                <div className="card-body p-0 rounded-bottom">
                                    <input type="text" className="form-control px-3" name="Postal Code" id="Postal Code" placeholder="A1B 2C4" {...register("postalCode")} />
                                </div>
                            </div>
                            {!newPassport ? (
                                <div onClick={() => setOnSlide(true)}>
                                    <UploadFile text={uploaded} />
                                </div>
                            ) : (
                                <div className="d-flex align-items-center">
                                    <img src="/img-mini-passport.png" alt="" className="rounded" />
                                    <div className="ml-3">
                                        <p className="h6 m-0">G2985726</p>
                                        <button className="btn btn-link text-primary p-0 font-weight-bold" onClick={() => setOnSlide(true)}>
                                            TAKE NEW PHOTO
                                        </button>
                                    </div>
                                </div>
                            )}
                            <button type="submit" className="btn btn-primary btn-block rounded-lg my-4 shadow-sm">
                                Confirm
                            </button>
                        </form>
                        <div className={`slider-panel ${onSlide ? "show" : ""}`}>
                            <div className="slider-panel-dialog">
                                <p className="h5 font-weight-bold">Let's get you verified!</p>
                                <p>Which photo ID whould you like to use?</p>

                                <div
                                    className="d-flex align-items-center py-3"
                                    onClick={() => {
                                        setOnSlide(false);
                                    }}
                                >
                                    {/* <img src="/icon-driver-license.svg" alt="" className="mr-3" />
                                    <strong>Driver's License</strong>
                                    <FaChevronRight className="ml-auto" /> */}
                                    <label htmlFor="upload" className="w-100 d-flex align-items-center" style={{ fontSize: "100%" }}>
                                        <ImCloudUpload className="mr-3" style={{ width: "2.5rem", height: "2.5rem" }} />
                                        <div className="w-100 d-flex align-items-center">
                                            <strong className="mr-auto">Upload from device</strong>
                                            <FaChevronRight className="ml-auto" />
                                        </div>
                                    </label>
                                    <input type="file" name="upload" id="upload" onChange={getFileName} hidden {...register("picture")} />
                                </div>
                                <div
                                    className="d-flex align-items-center py-3"
                                    onClick={() => {
                                        setTakePicture(true), setOnSlide(false);
                                    }}
                                >
                                    {/* <img src="/icon-passport.svg" alt="" className="mr-3" />
                                    <strong>Passport</strong>
                                    <span className="ml-auto">
                                        <div className="badge badge-pill badge-primary">Recommended</div>
                                        <FaChevronRight />
                                    </span> */}

                                    <ImCamera className="mr-3" style={{ width: "2.5rem", height: "2.2rem" }} />
                                    <strong>Take a picture</strong>
                                    <span className="ml-auto">
                                        <div className="badge badge-pill badge-primary">Recommended</div>
                                        <FaChevronRight />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : undefined}

            {takePicture ? (
                <div className="d-flex flex-column h-100 bg-dark">
                    <div className="px-3 pb-3 text-white d-flex justify-content-between align-items-center">
                        <div className="btn btn-link pl-0 " onClick={() => setTakePicture(false)}>
                            <IoIosArrowBack />
                        </div>
                        <strong className="pr-4 ">Passport</strong>
                        <FiHelpCircle />
                    </div>
                    <div className="px-3 text-center py-5">
                        <p className="text-white h4 font-weight-bold">Front of Passport</p>
                        <p className="text-white">Position all 4 corners of the front clearly in the frame.</p>
                        <button
                            className="btn btn-primary rounded-lg px-3"
                            onClick={() => {
                                setCheckQuality(true), setTakePicture(false);
                            }}
                        >
                            <FaCheck />
                        </button>
                    </div>
                </div>
            ) : undefined}

            {checkQuality ? (
                <div className="d-flex flex-column h-100">
                    <div className="px-3 pb-3 text-white d-flex justify-content-between align-items-center">
                        <div className="btn btn-link pl-0 " onClick={() => setCheckQuality(false)}>
                            <IoIosArrowBack />
                        </div>
                        <strong className="pr-4 text-dark">Passport</strong>
                        <FiHelpCircle />
                    </div>
                    <div className="px-3 text-center py-5">
                        <img src="/img-government-id-example.png" alt="" className="img-fluid shadow-lg mb-5" />
                        <img src="/icon-check-quality.svg" alt="" className="mt-2" />
                        <h4 className="font-weight-bold mt-4">Check quality</h4>
                        <p>Please make sure your card details are clear to read with no blur or glare.</p>
                        <div className="mt-5s">
                            <button
                                className="btn btn-primary btn-block shadow rounded-lg"
                                onClick={() => {
                                    setCheckQuality(false), setNewPassport(true);
                                }}
                            >
                                All clear. Continue
                            </button>
                            <button
                                className="btn btn-light text-primary btn-block"
                                onClick={() => {
                                    setTakePicture(true), setCheckQuality(false);
                                }}
                            >
                                Take a new photo
                            </button>
                        </div>
                    </div>
                </div>
            ) : undefined}
        </AppWrapper>
    );
}
