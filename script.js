const form = document.getElementById("form");
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password1");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  // based on the passed in element, we are getting its parent
  const field = element.parentElement;

  // Now, let's target element with class .error, which child element of field
  const errorField = field.querySelector(".error");

  //set text in .error
  errorField.innerText = message;

  field.classList.add("error");
  field.classList.remove("success");
};

const setSuccess = (element) => {
  // based on the passed in element, we are getting its parent
  const field = element.parentElement;

  // Now, let's target element with class .error, which child element of field
  const errorField = field.querySelector(".error");

  //set text in .error
  errorField.innerText = "";

  field.classList.remove("error");
  field.classList.add("success");
};

const isValidEmail = (email) => {
  const regExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLowerCase());
};

//function to validate our Input
const validateInputs = () => {
  let firstNameValue = firstName.value.trim();
  let lastNameValue = lastName.value.trim();
  let emailValue = email.value.trim();
  let usernameValue = username.value.trim();
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();

  //validate firstName value
  if (firstNameValue === "") {
    setError(firstName, "Please enter your first name.");
  } else {
    setSuccess(firstName);
  }

  if (lastNameValue === "") {
    setError(lastName, "Please enter your last name.");
  } else {
    setSuccess(lastName);
  }

  if (emailValue === "") {
    setError(email, "Please enter your email");
  } else if (isValidEmail(emailValue) !== true) {
    setError(email, "Please use a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Please Enter your password");
  } else if (passwordValue.length < 6) {
    setError(password, "Your Password must have at least 6 characters");
  } else if (passwordValue.length > 10) {
    setError(password, "The password max length is 10 characters");
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Password mismatch");
  } else {
    setSuccess(password2);
  }
};
