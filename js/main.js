window.onload = () => {
  let burger = document.querySelector(".burger");
  let menu = document.querySelector(".mobile");

  burger.onclick = () => {
    menu.classList.toggle("show");
  };
};
