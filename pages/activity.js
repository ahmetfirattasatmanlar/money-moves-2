import { useState, useEffect } from "react";
import AppWrapper from "components/_common/app-wrapper";
import ActivityCard from "components/_common/activity-card";
import TopBar from "components/_common/top-bar";

const activitiesList = [
    { src: "transferTo.svg", amount: "520.74", activityType: "Transfer to Bank", date: "Nov 23, 2021 10:33am" },
    { src: "paidInsurance.svg", amount: "20.74", activityType: "Paid Insurance", date: "May 23, 2021 10:33am" },
    { src: "transferTo.svg", amount: "520.74", activityType: "Transfer to Bank", date: "Nov 23, 2021 10:33am" },
    { src: "acreditedLoan.svg", amount: "520.74", activityType: "Acredited Loan", date: "Nov 23, 2021 10:33am" },
    { src: "transferTo.svg", amount: "520.74", activityType: "Transfer to Bank", date: "Dec 23, 2021 10:33am" },
    { src: "transferTo.svg", amount: "520.74", activityType: "Transfer to Bank", date: "Nov 23, 2021 10:33am" },
    { src: "transferTo.svg", amount: "520.74", activityType: "Transfer to Bank", date: "Nov 23, 2021 10:33am" },
    { src: "transferTo.svg", amount: "520.74", activityType: "Transfer to Bank", date: "Jun 23, 2021 10:33am" },
    { src: "transferTo.svg", amount: "520.74", activityType: "Transfer to Bank", date: "Nov 23, 2021 10:33am" },
    { src: "transferTo.svg", amount: "520.74", activityType: "Transfer to Bank", date: "Jun 23, 2021 10:33am" },
    { src: "transferTo.svg", amount: "520.74", activityType: "Transfer to Bank", date: "Nov 23, 2021 10:33am" },
];

export default function Activity() {
    const [month, setMonth] = useState("");
    const [activities, setActivities] = useState(activitiesList);

    const showMonth = (event) => {
        const selectedMonth = event.target.dataset.value;
        setMonth(selectedMonth);
    };

    useEffect(() => {
        const filterByMonth = activitiesList.filter((activity) => activity.date.includes(month));
        setActivities(filterByMonth);
    }, [month]);

    return (
        <AppWrapper nav>
            <div className="bg-gradient-dark text-white pb-3">
                <TopBar dark back={false} center />
            </div>

            <div className="bg-white shadow rounded-top-lg mt-neg pt-4 pb-bottom-app">
                <h4 className="text-center px-3 font-weight-bold mb-4">Activity</h4>
                <ul className="list-calendar">
                    <li className={month === "Jan" ? "active" : ""} className={month === "Jan" ? "active" : ""} data-value="Jan" onClick={showMonth} style={{ cursor: "pointer" }}>
                        Jan
                    </li>
                    <li className={month === "Feb" ? "active" : ""} data-value="Feb" onClick={showMonth} style={{ cursor: "pointer" }}>
                        Feb
                    </li>
                    <li className={month === "Mar" ? "active" : ""} data-value="Mar" onClick={showMonth} style={{ cursor: "pointer" }}>
                        Mar
                    </li>
                    <li className={month === "Apr" ? "active" : ""} data-value="Apr" onClick={showMonth} style={{ cursor: "pointer" }}>
                        Apr
                    </li>
                    <li className={month === "May" ? "active" : ""} data-value="May" onClick={showMonth} style={{ cursor: "pointer" }}>
                        May
                    </li>
                    <li className={month === "Jun" ? "active" : ""} data-value="Jun" onClick={showMonth} style={{ cursor: "pointer" }}>
                        Jun
                    </li>
                    <li className={month === "Jul" ? "active" : ""} data-value="Jul" onClick={showMonth} style={{ cursor: "pointer" }}>
                        Jul
                    </li>
                    <li className={month === "Aug" ? "active" : ""} data-value="Aug" onClick={showMonth} style={{ cursor: "pointer" }}>
                        Aug
                    </li>
                    <li className={month === "Sep" ? "active" : ""} data-value="Sep" onClick={showMonth} style={{ cursor: "pointer" }}>
                        Sep
                    </li>
                    <li className={month === "Oct" ? "active" : ""} data-value="Oct" onClick={showMonth} style={{ cursor: "pointer" }}>
                        Oct
                    </li>
                    <li className={month === "Nov" ? "active" : ""} data-value="Nov" onClick={showMonth} style={{ cursor: "pointer" }}>
                        Nov
                    </li>
                    <li className={month === "Dev" ? "active" : ""} data-value="Dec" onClick={showMonth} style={{ cursor: "pointer" }}>
                        Dec
                    </li>
                </ul>

                {activities.length > 0 ? activities.map((activity, index) => <ActivityCard {...activity} key={index} />) : <p className="text-center">No activities this month</p>}

                {/* <ActivityCard src={"transferTo.svg"} amount={"520.74"} activityType={"Transfer to Bank"} date={"Nov 23, 2021 10:33am"} />
                <ActivityCard src={"paidInsurance.svg"} amount={"20.74"} activityType={"Paid Insurance"} date={"Nov 23, 2021 10:33am"} />
                <ActivityCard src={"transferTo.svg"} amount={"520.74"} activityType={"Transfer to Bank"} date={"Nov 23, 2021 10:33am"} />
                <ActivityCard src={"acreditedLoan.svg"} amount={"20,000"} activityType={"Accredited Cash Loan"} date={"Nov 23, 2021 10:33am"} />
                <ActivityCard src={"acreditedLoan.svg"} amount={"20,000"} activityType={"Accredited Cash Loan"} date={"Nov 23, 2021 10:33am"} />
                <ActivityCard src={"acreditedLoan.svg"} amount={"20,000"} activityType={"Accredited Cash Loan"} date={"Nov 23, 2021 10:33am"} />
                <ActivityCard src={"acreditedLoan.svg"} amount={"20,000"} activityType={"Accredited Cash Loan"} date={"Nov 23, 2021 10:33am"} />
                <ActivityCard src={"acreditedLoan.svg"} amount={"20,000"} activityType={"Accredited Cash Loan"} date={"Nov 23, 2021 10:33am"} />
                <ActivityCard src={"acreditedLoan.svg"} amount={"20,000"} activityType={"Accredited Cash Loan"} date={"Nov 23, 2021 10:33am"} />
                <ActivityCard src={"acreditedLoan.svg"} amount={"20,000"} activityType={"Accredited Cash Loan"} date={"Nov 23, 2021 10:33am"} />
                <ActivityCard src={"acreditedLoan.svg"} amount={"20,000"} activityType={"Accredited Cash Loan"} date={"Nov 23, 2021 10:33am"} /> */}
            </div>
        </AppWrapper>
    );
}
