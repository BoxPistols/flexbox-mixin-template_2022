function val(_v: string) {
  // まずはターゲットの要素を取得する
  const getDoc = (getDom: string): Element => {
    return document.querySelector(getDom);
  };
  // CSSのスタイルを取得する
  const styleResults = (getStyling: Element) => {
    return window.getComputedStyle(getStyling);
  };
  const boxStyle = styleResults(getDoc(_v));
  // console.log(boxStyle);
  // const getCBoxCode = window.getComputedStyle(getDoc(_v).previousElementSibling);
  getDoc(_v).previousElementSibling.previousElementSibling.previousElementSibling.textContent = boxStyle.justifyContent;
  getDoc(_v).previousElementSibling.previousElementSibling.textContent = " / " + boxStyle.alignItems;
  getDoc(_v).previousElementSibling.textContent = " / " + boxStyle.flexDirection;
  // getDoc(_v).previousElementSibling.textContent = " / " + boxStyle.flexDirection + " / " + boxStyle.flexWrap;
  return;
}

/**
  * FIXME:　連番をLoopして取得したい
  */

val(".box1");
val(".box2");
val(".box3");
val(".box4");
val(".box5");
val(".box6");
val(".box7");
val(".box8");
val(".box9");
val(".box10");
val(".box11");
val(".box12");
