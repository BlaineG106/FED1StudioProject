function validateForm(event) {
    //define variables for both the text boxes and the invalid messages
    let controls = document.getElementsByClassName('form-control');
    let validationMessages = document.getElementsByClassName('invalid');

    //Check that they filled out each text box, if not display error message
    if (controls['Name'].value.length == 0 || controls['Email'].value.length == 0 || controls['Message'].value.length == 0) {
        event.preventDefault();

        if (controls['Name'].value.length == 0) {
            validationMessages['rfvName'].textContent = "* Name is Required";
        }
        else {
            validationMessages['rfvName'].textContent = "";
        }
        if (controls['Email'].value.length == 0) {
            validationMessages['rfvEmail'].textContent = "* Email is Required";
        }
        else {
            validationMessages['rfvEmail'].textContent = "";
        }
        if (controls['Message'].value.length == 0) {
            validationMessages['rfvMessage'].textContent = "* Message is Required";
        }
        else {
            validationMessages['rfvMessage'].textContent = "";
        }
    }

}