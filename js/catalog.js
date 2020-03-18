var btnBasket = document.getElementsByClassName("btn-buy");
var popup = document.querySelector(".popup-add-to-basket");
var closeBtn = popup.querySelector(".close-popup-basket");

for (var i = 0; i < btnBasket.length; i++) {
btnBasket[i].addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("popup-show");
});
}

closeBtn.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("popup-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("popup-show")) {
        popup.classList.remove("popup-show");
      }
    
    }
  });