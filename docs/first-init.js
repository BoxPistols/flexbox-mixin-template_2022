// let bxs = document.querySelectorAll(".section .bx");
// for (var i = 0; i < bxs.length; i++) {
//   bxs[i].addEventListener(
//     "click",
//     function () {
//       // this.style.color = "blue";
//       console.log(getComputedStyle(this).justifyContent);
//     },
//     false
//   );
// }
// const box = document.querySelector(".box");
// const boxStyle = getComputedStyle(box).display;
// console.log(boxStyle);
// const box = document.querySelector(".box");
/**
 * getComputedStyle(x).display
 * getComputedStyle(x).
 * getComputedStyle(x).alignItems
 */
var val_s = (_v) => {
  // get target Element
  var getDoc = function (getDom) {
      return document.querySelector(getDom);
  };
  // const boxDom = getDoc(".box");
  // getStyling
  var styleResults = function (getStyling) {
      return window.getComputedStyle(getStyling);
  };
  var boxStyle = styleResults(getDoc(_v));
  // console.log(boxStyle);
  var getCBoxCode = window.getComputedStyle(getDoc(_v).previousElementSibling);
  getDoc(_v).previousElementSibling.previousElementSibling.textContent =
      boxStyle.justifyContent;
  getDoc(_v).previousElementSibling.textContent = " / " + boxStyle.alignItems;
  return;
};
val_s(".box");
val_s(".box2");
val_s(".box3");
val_s(".box4");
// let vv = (x) => {
//   for (var i = 0; i < 5; i++) {
//     val(x + i);
//   }
// };
// vv(".box");
// for (var i = 0; i < bxs.length; i++) {
//   val(".box" + i);
//   console.log(val(".box" + i));
// }
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
