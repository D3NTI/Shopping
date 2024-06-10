let btn = document.querySelector("#btn");
let open = false;
let bar = document.querySelector(".opened");
console.log(btn);

btn.addEventListener("click", () => {
  if (open == false) {
    open = true;
    btn.innerHTML = "x";

    bar.classList.add("open");
  } else {
    open = false;
    btn.innerHTML = "&#8801;";
    bar.classList.remove("open");
  }
  console.log(open);
});
