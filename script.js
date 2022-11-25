const submit = document.querySelector("#submit");
const email = document.querySelector("#email");
const body = document.querySelector("body");
const formContainer = document.querySelector(".form-container");
const formMessage = document.querySelector(".form-message");

/* validate email */
const validateEmail = function (mail) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
		return true;
	}
	return false;
};

const invalidEmail = function () {
	formMessage.style.visibility = "visible";
};

const validEmail = function () {
	invalidEmail();
	formMessage.innerHTML = "Thanks for your subscription!";
	formMessage.style.color = "#54E6AF";
	email.setAttribute("placeholder", "Email address");
	email.value = "";
};

submit.addEventListener("click", function (e) {
	if (validateEmail()) {
		validEmail();
		this.disabled = true;
	} else {
		invalidEmail();
		e.preventDefault();
	}
});
