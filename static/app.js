var form = document.querySelector("form");
var firstName = document.getElementById("first-name");
var middleName = document.getElementById("middle-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var dateOfBirth = document.getElementById("dob");
var phoneNumber = document.getElementById("phone-number");
var address = document.getElementById("address");
var stateOfOrigin = document.getElementById("state");
var localGovernmentArea = document.getElementById("lga");
var nextOfKin = document.getElementById("next-of-kin");
var jambScore = document.getElementById("jamb-score");
var submitButton = document.getElementById("submit-btn")


function portalFormValidation() {
    if (firstName.value == "") {
        firstName.value
        firstName.focus();
        return false;
    }
    if (middleName.value == "") {
        middleName.value
        middletName.focus();
        return false;
    }
    if (lastName.value == "") {
        lastName.value
        lasttName.focus();
        return false;
    }
    if (email.value == "") {
        email.value
        email.focus();
        return false;
    }
    if (dateOfBirth.value == "") {
        dateOfBirth.value
        dateOfBirth.focus();
        return false;
    }
    if (phoneNumber.value == "") {
        phoneNumber.value
        phoneNumber.focus();
        return false;
    }
    if (address.value == "") {
        address.value
        address.focus();
        return false;
    }
    if (stateOfOrigin.selectedIndex < 1) {
        stateOfOrigin.value
        stateOfOrigin.focus();
        return false;
    }
    if (localGovernmentArea.selectedIndex < 1) {
        localGovernmentArea.value
        localGovernmentArea.focus();
        return false;
    }
    if (nextOfKin.value == "") {
        nextOfKin.value
        nextOfKin.focus();
        return false;
    }
    if (jambScore.value == "") {
        jambScore.value
        jambScore.focus();
        return false;
    }

    return true;
}

submitButton.onclick = portalFormValidation;

console.log(submitButton.onclick)