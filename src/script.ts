function val(_findEl: string) {
  if (typeof document !== "undefined") {
    // まずはターゲットの要素を取得する
    let getDoc = (_getEl: string) => {
      return document.querySelector(_getEl);
    };

    // CSSのスタイルを取得する
    let styleResults = (_getStyling: Element) => {
      return window.getComputedStyle(_getStyling);
    };

    // 表示UI「box」に、ターゲット要素の取得をしながら、その要素にCSSスタイルを取得するための準備をする
    let boxStyle = styleResults(getDoc(_findEl));

    // console.log(boxStyle);
    // const getCBoxCode = window.getComputedStyle(getDoc(_findEl).previousElementSibling);

    getDoc(
      _findEl
    ).previousElementSibling.previousElementSibling.previousElementSibling.textContent =
      boxStyle.justifyContent;
    getDoc(_findEl).previousElementSibling.previousElementSibling.textContent =
      " / " + boxStyle.alignItems;
    getDoc(_findEl).previousElementSibling.textContent =
      " / " + boxStyle.flexDirection;
    // getDoc(_findEl).previousElementSibling.textContent = " / " + boxStyle.flexDirection + " / " + boxStyle.flexWrap;
  }
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
