//alert("It's working");
//DOM ELEMENTS
let reserveBtn = document.querySelector(".reserve-btn");

// reserveBtn.addEventListener("click", function () {
//   if (reserveBtn.textContent === "Reserve") {
//     reserveBtn.textContent = "Sign up";
//   } else {
//     reserveBtn.textContent = "Reserve";
//   }
// });

//WHEN RESERVE CLICKED, BRING TO SIGN UP PAGE
reserveBtn.onclick = function () {
  location.href = "./signup.html";
};
