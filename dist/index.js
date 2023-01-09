"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.getElementById("todoform");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submitted");
});
// btn?.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
