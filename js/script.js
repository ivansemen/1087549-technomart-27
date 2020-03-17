var link = document.querySelector(".btn-write-us");
var popup = document.querySelector(".popup-write-us");
var close = popup.querySelector(".close-popup-write-us");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var form = popup.querySelector("form");
var isStorageSupport = true;
var storage = "";

var btnDelivery = document.querySelector(".btn-delivery");
var btnGuarantee = document.querySelector(".btn-guarantee");
var btnCredit = document.querySelector(".btn-credit");
var delivery = document.querySelector(".delivery-wrapper");
var guarantee = document.querySelector(".guarantee-wrapper");
var credit = document.querySelector(".credit-wrapper");

function deleteActive (button) {
button.classList.remove("btn-active");
button.classList.add("btn-service");
}

btnDelivery.addEventListener("click", function(evt) {
	evt.preventDefault();
	credit.style.display = "none";
	guarantee.style.display = "none";
	delivery.style.display = "block";

	btnDelivery.classList.add("btn-active");
	btnDelivery.classList.remove("btn-service");

	deleteActive(btnGuarantee);
	deleteActive(btnCredit);
});

btnGuarantee.addEventListener("click", function(evt) {
	evt.preventDefault();
	delivery.style.display = "none";
	credit.style.display = "none";
	guarantee.style.display = "block";

	btnGuarantee.classList.add("btn-active");
	btnGuarantee.classList.remove("btn-service");

	deleteActive(btnDelivery);
	deleteActive(btnCredit);
});

btnCredit.addEventListener("click", function(evt) {
	evt.preventDefault();
	delivery.style.display = "none";
	guarantee.style.display = "none";
	credit.style.display = "block";

	btnCredit.classList.add("btn-active");
	btnCredit.classList.remove("btn-service");

	deleteActive(btnDelivery);
	deleteActive(btnGuarantee);
});




var slider1 = document.querySelector(".slider-1");
var slider2 = document.querySelector(".slider-2");
var btnLeft = document.querySelector(".slider-btn-left");
var btnRight = document.querySelector(".slider-btn-right");
var backDot = document.querySelector(".control-back");
var forwardDot = document.querySelector(".control-forward");

function switchRight() 
{
	slider2.style.display = "block";
	slider1.style.display = "none";
	forwardDot.classList.add("control-slider-active");
	backDot.classList.remove("control-slider-active");
}

function switchLeft() 
{
	if (slider2) {
		slider1.style.display = "block";
		slider2.style.display = "none";
		forwardDot.classList.remove("control-slider-active");
		backDot.classList.add("control-slider-active");
	}	
}

btnRight.addEventListener("click", function (evt) {
	evt.preventDefault();
	switchRight();
});

btnLeft.addEventListener("click", function (evt) {
	evt.preventDefault();
	switchLeft();
});


forwardDot.addEventListener("click", function (evt) {
	evt.preventDefault();
	switchRight();
});

backDot.addEventListener("click", function (evt) {
	evt.preventDefault();
	switchLeft();
});
  
  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

  

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("popup-show");
	
	if (storage) 
  {
  	login.value = storage;
  	email.focus();
  } else {
  	login.focus();
  }
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("popup-show");
popup.classList.remove("popup-error");
});

form.addEventListener("submit", function (evt) {
if (!login.value || !email.value) {
evt.preventDefault();
	popup.classList.remove("popup-error");
	popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("popup-error");
} else 
{
	if (isStorageSupport) {
	localStorage.setItem("login", login.value);
	localStorage.setItem("email", email.value);
	}
}
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
        popup.classList.remove("popup-error");
      }
    }
  });