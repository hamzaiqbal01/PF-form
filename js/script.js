// login page validation

const emailInput = document.getElementById("email");
const errorSpan = document.getElementById("error");

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

emailInput.addEventListener("input", function () {
  const email = emailInput.value;
  if (regex.test(email)) {
    errorSpan.textContent = "";
  }
});

function validateForm() {
  const email = emailInput.value;

  if (!regex.test(email)) {
    errorSpan.textContent = "Invalid email address";
    return false;
  } else {
    errorSpan.textContent = "";
    return true;
  }
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const showPasswordBtn = document.getElementById("showPasswordBtn");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    showPasswordBtn.textContent = "Show";
  }
}

// signup validation

function validateSignupForm() {
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const signupEmailInput = document.getElementById("signupEmail");
  const signupErrorSpan = document.getElementById("signupError");
  const signupPasswordInput = document.getElementById("signupPassword");
  const addressInput = document.getElementById("address");
  const phoneInput = document.getElementById("phone");
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let isValid = true;
  if (
    !firstNameInput.value ||
    !lastNameInput.value ||
    !signupEmailInput.value ||
    !signupPasswordInput.value ||
    !addressInput.value ||
    !phoneInput.value
  ) {
    alert("All fields are required. Please fill them out.");
    isValid = false;
  }

  if (!regex.test(signupEmailInput.value)) {
    signupErrorSpan.textContent = "Invalid email address";
    isValid = false;
  } else {
    signupErrorSpan.textContent = "";
  }

  return isValid;
}

function toggleSignupPasswordVisibility() {
  const signupPasswordInput = document.getElementById("signupPassword");
  const showSignupPasswordBtn = document.getElementById(
    "showSignupPasswordBtn"
  );

  if (signupPasswordInput.type === "password") {
    signupPasswordInput.type = "text";
    showSignupPasswordBtn.textContent = "Hide";
  } else {
    signupPasswordInput.type = "password";
    showSignupPasswordBtn.textContent = "Show";
  }
}

// upload image

function handleFormSubmit() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;

  const imageURL = document.getElementById("imageUpload").value;

  const userData = {
    firstName,
    lastName,
    email,
    password,
    address,
    phone,
    image: imageURL,
  };

  localStorage.setItem("userData", JSON.stringify(userData));

  document.getElementById("signupForm").reset();

  alert("Data has been stored in local storage.");

  // For example, redirect to a "Thank you" page
  // window.location.href = './thankyou.html';
}
