function val(_v) {
    // まずはターゲットの要素を取得する
    var getDoc = function (getDom) {
        return document.querySelector(getDom);
    };
    // CSSのスタイルを取得する
    var styleResults = function (getStyling) {
        return window.getComputedStyle(getStyling);
    };
    var boxStyle = styleResults(getDoc(_v));
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
