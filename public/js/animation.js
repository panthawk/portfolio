const name = document.querySelector(".names");
const two = name.querySelector(".twos");
const three = name.querySelector(".threes");

const add1 = () => {
  if (three.classList.contains("hide")) {
    add2();
    three.classList.remove("hide");
  } else {
    two.classList.contains("hide");
    add3();
    two.classList.remove("hide");
  }
};

const add2 = () => {
  two.classList.add("hide");
};
const add3 = () => {
  three.classList.add("hide");
};

setTimeout(() => {
  setInterval(() => {
    add1();
  }, 2000);
}, 7200);
