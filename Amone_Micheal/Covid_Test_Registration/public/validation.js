var snameEl = document.querySelector("#surname");
var gnameEl = document.querySelector("#givenName");
var categoryEl = document.querySelector("#category");
var residEl = document.querySelector("#residence");
var form = document.querySelector("#testCovid");
var jobEl = document.querySelector("#occupation");
var nationalEl = document.querySelector("#nationality");
var dObEl = document.querySelector("#dob");


//The following isRequired() function returns true if the input argument is empty:
var isRequired = (value) => (value === "" ? false : true);
var isRequire = (value) => (value === "none" ? false : true);
//The following isBetween() function returns false if the length argumet is not between the min and max argument:
var isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

var isNameValid = (number) => {
  var re = /^[A-Z]([a-z'-.]+)$/;
  return re.test(number);
};

var NameValid = (number) => {
  var re = /^[A-Z]([a-z'-.]+ [A-Z][a-z'-.]+)$/;
  return re.test(number);
};

//Develop functions that show the error / success
var showError = (input, message) => {
  // get the form-field element
  var formField = input.parentElement;
  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  var error = formField.querySelector("small");
  error.textContent = message;
};
var showSuccess = (input) => {
  // get the form-field element
  var formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  var error = formField.querySelector("small");
  error.textContent = "";
};
// Validate the username field
var surname = () => {
  let valid = false;
  var min = 1,
    max = 16;
  var surname = snameEl.value.trim();

  if (!isRequired(surname)) {
    showError(snameEl, "*Required field");
    snameEl.style.border = "1px solid red";
  } else if (!isNameValid(surname)) {
    showError(snameEl, "*Incorrect Format");
    snameEl.style.border = "1px solid red";
  } else if (!isBetween(surname.length, min, max)) {
    showError(
      snameEl,
      `*Surname must be between ${min} and ${max} characters.`
    );
    snameEl.style.border = "1px solid red";
  } else {
    showSuccess(snameEl);
    snameEl.style.border = "1px solid grey";
    valid = true;
  }
  return valid;
};
//Validate the id field
var giveName = () => {
  let valid = false;
  var min = 1,
    max = 16;
  var givenName = gnameEl.value.trim();

  if (!isRequired(givenName)) {
    showError(gnameEl, "*Required field");
    gnameEl.style.border = "1px solid red";
  } else if (!isNameValid(givenName)) {
    showError(gnameEl, "*Incorrect Format");
    gnameEl.style.border = "1px solid red";
  } else if (!isBetween(givenName.length, min, max)) {
    showError(
      gnameEl,
      `*Given Name must be between ${min} and ${max} characters.`
    );
    gnameEl.style.border = "1px solid red";
  } else {
    showSuccess(gnameEl);
    gnameEl.style.border = "1px solid grey";
    valid = true;
  }
  return valid;
};

var DOB = () => {
  let valid = false;

  var dOb = dObEl.value.trim();
  if (!isRequired(dOb)) {
    showError(dObEl, "*Required field");
    dObEl.style.border = "1px solid red";
  } else {
    showSuccess(dObEl);
    dObEl.style.border = "1px solid grey";
    valid = true;
  }

  return valid;
};

var job = () => {
  let valid = false;
  var min = 5,
    max = 50;
  var occupation = jobEl.value.trim();
  if (!isRequired(occupation)) {
    showError(jobEl, "*Required field");
    jobEl.style.border = "1px solid red";
  } else if (!NameValid(occupation)) {
    showError(jobEl, "*Incorrect Format");
    jobEl.style.border = "1px solid red";
  } else if (!isBetween(occupation.length, min, max)) {
    showError(
      jobEl,
      `*Occupation must be between ${min} and ${max} characters.`
    );
    jobEl.style.border = "1px solid red";
  } else {
    showSuccess(jobEl);
    jobEl.style.border = "1px solid grey";
    valid = true;
  }

  return valid;
};

var checkNationality = () => {
  let valid = false;
  var min = 5,
    max = 50;
  var nationality = nationalEl.value.trim();
  if (!isRequired(nationality)) {
    showError(nationalEl, "*Required field");
    nationalEl.style.border = "1px solid red";
  } else if (!isNameValid(nationality)) {
    showError(nationalEl, "*Incorrect Format");
    nationalEl.style.border = "1px solid red";
  } else if (!isBetween(nationality.length, min, max)) {
    showError(
      nationalEl,
      `*Nationality must be between ${min} and ${max} characters.`
    );
    nationalEl.style.border = "1px solid red";
  } else {
    showSuccess(nationalEl);
    nationalEl.style.border = "1px solid grey";
    valid = true;
  }

  return valid;
};

var category = () => {
  let valid = false;
  var select = categoryEl.value.trim();
  if (!isRequire(select)) {
    showError(categoryEl, "*Please select an option.");
    categoryEl.style.border = "1px solid red";
  } else {
    showSuccess(categoryEl);
    categoryEl.style.border = "1px solid green";
    valid = true;
  }

  return valid;
};

//Validate the residence field
var checkResidence = () => {
  let valid = false;
  var min = 1,
    max = 20;
  var residence = residEl.value.trim();
  if (!isRequired(residence)) {
    showError(residEl, "*Required field");
    residEl.style.border = "1px solid red";
  } else if (!isNameValid(residence)) {
    showError(residEl, "*Incorrect Format");
    residEl.style.border = "1px solid red";
  } else if (!isBetween(residence.length, min, max)) {
    showError(
      residEl,
      `*Residence must be between ${min} and ${max} characters.`
    );
    residEl.style.border = "1px solid red";
  } else {
    showSuccess(residEl);
    residEl.style.border = "1px solid green";
    valid = true;
  }

  return valid;
};

//modify button event handler
form.addEventListener("submit", function (e) {
  // prevent the form from submitting

  // validate forms
  let surnameValid = surname(),
    givenNameValid = giveName(),
    categoryValid = category(),
    occupationValid = job(),
    dObValid = DOB(),
    // isAgeValid=checkAge(),
    nationalityValid = checkNationality(),
    residenceValid = checkResidence();
  // isConfirmPasswordValid = checkConfirmPassword();

  let formValid =
    surnameValid &&
    givenNameValid &&
    categoryValid &&
    occupationValid &&
    // isAgeValid&&
    residenceValid &&
    nationalityValid &&
    dObValid;
  // isConfirmPasswordValid;

  // submit to the server if the form is valid
  if (!formValid) {
    e.preventDefault();
  }
});
