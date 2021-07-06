const validateForm = (data) => {
    let notFilled = [];
    for (let property in data) {
        if (property === "monthsOfEmployment") {
            if (data[property] === "0") {
                notFilled.push(property);
            }
        }

        if (data[property] === "") {
            notFilled.push(property);
        }
    }

    if (notFilled.length > 0) {
        alert(`We are missing some fields ${notFilled.toString()}`);
        return false;
    }
    alert("Form validated and sent to the server");
};

export default validateForm;
