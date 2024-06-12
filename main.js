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

let signUPButtons = document.querySelectorAll(".sign-up");
let form = document.querySelector(".form");
let overlay = document.querySelector("#overlay");
let endregButton = document.querySelector("#endreg");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#pass");

signUPButtons.forEach((button) => {
  button.addEventListener("click", () => {
    form.classList.add("visible");
    overlay.classList.add("visible");
  });
});

overlay.addEventListener("click", () => {
  form.classList.remove("visible");
  overlay.classList.remove("visible");
});

endregButton.addEventListener("click", (e) => {
  e.preventDefault(); //
  if (emailInput.value && passwordInput.value) {
    form.classList.remove("visible");
    overlay.classList.remove("visible");

    console.log("email:" + emailInput.value);
    console.log("password:" + passwordInput.value);

    signUPButtons.forEach((button) => {
      button.remove();
    });
    let nick = document.createElement("li");
    nick.innerHTML = `<a>${emailInput.value}</a>`;
    document.querySelector(".version").appendChild(nick);
  } else {
    alert("Please fill in both the email and password fields.");
  }

  let nic = document.createElement("li");
  nic.innerHTML = `<a>${emailInput.value}</a>`;
  bar.appendChild(nic);
});
