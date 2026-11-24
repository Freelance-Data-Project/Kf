
// Work From Home Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

  // सभी Buttons Select करें
  const buttons = document.querySelectorAll(".btn");

  // Button Click Effect
  buttons.forEach(function (button) {

    button.addEventListener("click", function () {

      button.classList.add("clicked");

      setTimeout(function () {
        button.classList.remove("clicked");
      }, 180);

    });

  });

});
