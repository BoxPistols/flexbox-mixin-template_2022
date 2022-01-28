let bxs = document.querySelectorAll(".section .bx");
for (var i = 0; i < bxs.length; i++) {
  bxs[i].addEventListener(
  "click",
  function () {
    // this.style.color = "blue";
    console.log(getComputedStyle(this).justifyContent);
  },
  false);

}

// document.addEventListener("DOMContentLoaded", function () {
//   for (let i = 0; i < bxs.length; i++) {
//     // alert(getComputedStyle(this).justifyContent);
//     console.log(bxs.length);
//   }
// });

// window.addEventListener("load", function () {
//   for (var i = 0; i < bxs.length; i++) {
//     // console.log("Load");
//     console.log(this.textContent);
//   }
// });

// const box = document.querySelector(".box");
// const boxStyle = getComputedStyle(box).display;
// console.log(boxStyle);
// const box = document.querySelector(".box");

/**
 * getComputedStyle(x).display
 * getComputedStyle(x).
 * getComputedStyle(x).alignItems
 */

// get target Element
const getDoc = getDom => {
  return document.querySelector(getDom);
};
const boxDom = getDoc(".box");

// getStyling
const styleResults = getStyling => {
  return window.getComputedStyle(getStyling);
};
const boxStyle = styleResults(boxDom).alignItems;
// console.log(boxStyle);

const getCBoxCode = window.getComputedStyle(boxDom.previousElementSibling);
boxDom.previousElementSibling.textContent = boxStyle;
// console.log(getComputedStyle(boxDom).display);

/* Example: 
let para = document.querySelector("p");
let compStyles = window.getComputedStyle(para);
para.textContent =
  "computed font-size:" + compStyles.getPropertyValue("font-size") + ".";
*/

/** Docs
 
 * [JavaScript \| 要素ノードの子・親・兄弟要素のノードを取得(children,firstElementChild,nextElementSibling,parentElement,他)](https://www.javadrive.jp/javascript/dom/index12.html#section3)
 
 * [Window.getComputedStyle() - Web API \| MDN](https://developer.mozilla.org/ja/docs/Web/API/Window/getComputedStyle)
 
 */