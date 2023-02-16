// let input = document.querySelector(".input");
// let theName = document.querySelector(".realname");
// let span = document.querySelector("span");
// let add = document.querySelector("h2");
// let show = document.querySelectorAll(".game-part div");
// let one = document.getElementById("1");
// let two = document.getElementById("2");
// let three = document.getElementById("3");
// let four = document.getElementById("4");
// let five = document.getElementById("5");
// let six = document.getElementById("6");
// let seven = document.getElementById("7");
// let eight = document.getElementById("8");
// let nine = document.getElementById("9");
// let win = document.getElementsByClassName("win")[0];
// let winner = document.getElementsByClassName("winner")[0];
// let footer = document.querySelector("footer");
// footer.innerHTML = `copy right ${new Date().getFullYear()}`;
// window.onload = function () {
//   document.getElementsByTagName("h2")[0].style.left = "0px";
// };
// input.onblur = function () {
//   if (this.value.trim() !== "") {
//     theName.style.display = "block";
//     this.style.display = "none";
//     theName.innerHTML = ` Hello ${this.value}`;
//     this.value = "";
//     span.style.display = "inline";

//     add.innerHTML = `its trun of`;
//     x();
//   } else "";
// };
// function x() {
//   show.forEach((e) => {
//     e.onclick = function () {
//       if (span.innerHTML == "x" && e.innerHTML == "") {
//         e.innerHTML = span.innerHTML;
//         console.log(e);
//         span.innerText = "o";
//       } else if (span.innerHTML != "x" && e.innerHTML == "") {
//         e.innerHTML = "o";
//         console.log(e);
//         span.innerHTML = "x";
//       }
// if (
//   one.innerHTML == two.innerHTML &&
//   one.innerHTML == three.innerHTML &&
//   two.innerHTML != ""
// ) {
//   winner.textContent = `The Winner is ${one.innerHTML} `;
//   win.style.zIndex = 9;
//   winner.style.letterSpacing = "2px";
// }
// if (
//   four.innerHTML == five.innerHTML &&
//   four.innerHTML == six.innerHTML &&
//   six.innerHTML != ""
// ) {
//   winner.innerHTML = `The Winner is ${four.innerHTML} `;
//   win.style.zIndex = 9;
//   winner.style.letterSpacing = "2px";
// }
// if (
//   one.innerHTML == five.innerHTML &&
//   five.innerHTML == nine.innerHTML &&
//   five.innerHTML != ""
// ) {
//   winner.innerHTML = `The Winner is ${one.innerHTML} `;
//   win.style.zIndex = 9;
//   winner.style.letterSpacing = "2px";
// }
// if (
//   seven.innerHTML == eight.innerHTML &&
//   seven.innerHTML == nine.innerHTML &&
//   seven.innerHTML != ""
// ) {
//   winner.innerHTML = `The Winner is ${seven.innerHTML} `;
//   win.style.zIndex = 9;
//   winner.style.letterSpacing = "2px";
// }
// if (
//   two.innerHTML == five.innerHTML &&
//   five.innerHTML == eight.innerHTML &&
//   five.innerHTML != ""
// ) {
//   winner.innerHTML = `The Winner is ${five.innerHTML} `;
//   win.style.zIndex = 9;
//   winner.style.letterSpacing = "2px";
// }
// if (
//   three.innerHTML == five.innerHTML &&
//   five.innerHTML == seven.innerHTML &&
//   five.innerHTML != ""
// ) {
//   winner.innerHTML = `The Winner is ${three.innerHTML} `;
//   win.style.zIndex = 9;
//   winner.style.letterSpacing = "2px";
// }
// if (
//   three.innerHTML == six.innerHTML &&
//   six.innerHTML == nine.innerHTML &&
//   three.innerHTML != ""
// ) {
//   winner.innerHTML = `The Winner is ${three.innerHTML} `;
//   win.style.zIndex = 9;
//   winner.style.letterSpacing = "2px";
// }
// if (
//   one.innerHTML == four.innerHTML &&
//   four.innerHTML == seven.innerHTML &&
//   four.innerHTML != ""
// ) {
//   winner.innerHTML = `The Winner is ${four.innerHTML} `;
//   win.style.zIndex = 9;
//   winner.style.letterSpacing = "2px";
// }
//     };
//   });
// }
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
let input = document.querySelector(".input");
let theName = document.querySelector(".realname");
let span = document.querySelector("span");
let add = document.querySelector("h2");
let show = document.querySelectorAll(".game-part div");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let win = document.getElementsByClassName("win")[0];
let winner = document.getElementsByClassName("winner")[0];
let footer = document.querySelector("footer");
let label = document.getElementsByTagName("label")[0];
let res = document.querySelector(".res");

let array = document.querySelectorAll(".choose");
res.onclick = function () {
  window.location.reload();
};
window.onload = function () {
  document.getElementsByTagName("h2")[0].style.left = "0px";
};
input.onblur = function () {
  if (this.value.trim() !== "") {
    theName.style.display = "flex";
    this.style.display = "none";
    label.style.display = "none";

    theName.innerHTML = ` Hello : ${this.value}`;
    this.value = "";
    span.style.display = "inline";

    add.innerHTML = `its trun of : `;

    xoGAME();
  } else "";
};

function xoGAME() {
  array.forEach((e) =>
    e.addEventListener("click", () => {
      if (e.innerHTML != "o" && e.innerHTML === "") {
        e.classList.remove("choose");
        e.innerHTML = "x";

        span.innerHTML = "o";
        be();
        setO();
      }
    })
  );
}
function setO() {
  setTimeout(() => {
    let getArr = document.querySelectorAll(".choose");
    if (getArr.length > 0) {
      getArr[Math.floor(Math.random() * getArr.length)].innerHTML = "o";
      be();
      for (let i = 0; i < getArr.length; i++) {
        if (getArr[i].innerHTML === "o") {
          getArr[i].classList.remove("choose");
          span.innerHTML = "x";
        }
      }
    } else {
      add.innerHTML = "DROW";

      span.style.display = "none";

      setTimeout(() => {
        add.style.letterSpacing = "10px";
        add.style.color = "grey";
        add.style.fontSize = "grey";
      }, 700);
    }
  }, 500);
}
function be() {
  if (
    one.innerHTML == two.innerHTML &&
    two.innerHTML == three.innerHTML &&
    two.innerHTML != "" &&
    one.innerHTML != ""
  ) {
    winner.textContent = `The Winner is ${one.innerHTML} `;
    win.style.zIndex = 9;
    winner.style.letterSpacing = "2px";
    console.log(1);
  }
  if (
    four.innerHTML == five.innerHTML &&
    five.innerHTML == six.innerHTML &&
    five.innerHTML != "" &&
    six.innerHTML != ""
  ) {
    winner.innerHTML = `The Winner is ${four.innerHTML} `;
    win.style.zIndex = 9;
    winner.style.letterSpacing = "2px";
    console.log(2);
  }
  if (
    one.innerHTML == five.innerHTML &&
    five.innerHTML == nine.innerHTML &&
    five.innerHTML !== "" &&
    nine.innerHTML != ""
  ) {
    winner.innerHTML = `The Winner is ${one.innerHTML} `;
    win.style.zIndex = 9;
    winner.style.letterSpacing = "2px";
    console.log(3);
  }
  if (
    seven.innerHTML == eight.innerHTML &&
    seven.innerHTML == nine.innerHTML &&
    seven.innerHTML != "" &&
    eight.innerHTML != ""
  ) {
    winner.innerHTML = `The Winner is ${seven.innerHTML} `;
    win.style.zIndex = 9;
    winner.style.letterSpacing = "2px";
    console.log(4);
  }
  if (
    two.innerHTML == five.innerHTML &&
    five.innerHTML == eight.innerHTML &&
    five.innerHTML != "" &&
    eight.innerHTML != ""
  ) {
    winner.innerHTML = `The Winner is ${five.innerHTML} `;
    win.style.zIndex = 9;
    winner.style.letterSpacing = "2px";
    console.log(5);
  }
  if (
    three.innerHTML == five.innerHTML &&
    three.innerHTML == seven.innerHTML &&
    five.innerHTML != "" &&
    three.innerHTML != ""
  ) {
    winner.innerHTML = `The Winner is ${three.innerHTML} `;
    win.style.zIndex = 9;
    winner.style.letterSpacing = "2px";
    console.log(6);
  }
  if (
    three.innerHTML == six.innerHTML &&
    six.innerHTML == nine.innerHTML &&
    six.innerHTML != "" &&
    three.innerHTML != ""
  ) {
    winner.innerHTML = `The Winner is ${three.innerHTML} `;
    win.style.zIndex = 9;
    winner.style.letterSpacing = "2px";
    console.log(7);
  }
  if (
    one.innerHTML == four.innerHTML &&
    four.innerHTML == seven.innerHTML &&
    four.innerHTML != "" &&
    seven.innerHTML != ""
  ) {
    winner.innerHTML = `The Winner is ${four.innerHTML} `;
    win.style.zIndex = 9;
    winner.style.letterSpacing = "2px";
    console.log(8);
  }
}
