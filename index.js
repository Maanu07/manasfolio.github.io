const tab_btn_container = document.querySelector(".p-btns");
const tab_btns = document.querySelectorAll(".p-btn");
const img_containers = document.querySelectorAll(".img-overlay");

tab_btn_container.addEventListener("click", (e) => {
  const btn_clicked = e.target;
  const btn_number = btn_clicked.dataset.btnNum;

  // tab-button-animation
  tab_btns.forEach((element) => element.classList.remove("p-btn-active"));
  btn_clicked.classList.add("p-btn-active");

  // tab-button-logic
  const display_imgs = document.querySelectorAll(`.p-btn-${btn_number}`);
  img_containers.forEach((element) => element.classList.add("hide-image"));
  display_imgs.forEach((element) => element.classList.remove("hide-image"));
});

// counter section logic
/* const counters = document.querySelectorAll(".counter-numbers");
counters.forEach((element) => {
  const countUpto = element.innerText;
  let counter = 0;
  const id = setInterval(handleIncrement, 0.000001);

  function handleIncrement() {
    if (counter == countUpto) {
      element.innerText = `${counter}+`;
      return clearInterval(id);
    }
    counter++;
    element.innerText = counter;
  }
}); */
