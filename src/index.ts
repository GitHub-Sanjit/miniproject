const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.getElementById("todoform")!;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Submitted");
});
// btn?.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
