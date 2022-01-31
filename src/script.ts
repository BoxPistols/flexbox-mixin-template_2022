function val(_findEl : any, index : number) { // グローバル変数にdocumentがあるのかの有無判定
  if (typeof document !== 'undefined') { // まずはターゲットの要素を取得する
    let getDoc = (_getEl : string) => {
      return document.querySelector(_getEl)
    }

    // CSSのスタイルを取得する
    let styleResults = (_getStyling : Element) => {
      if (_getStyling !== null) {
        return window.getComputedStyle(_getStyling)
      }
    }

    // 表示UI「box」に、ターゲット要素の取得をしながら、その要素にCSSスタイルを取得するための準備をする
    let boxStyle = styleResults(getDoc(_findEl))

    // 表示UIテキストの設定
    // TODO: previousElementSiblingが多いので簡略したい


    // if (_findEl !== null) { // 指定したid属性のHTML要素を取得
    // if (typeof document !== 'undefined') {
    //     var element = getDoc(_findEl)
    //     var getEl = element.parentNode;
    //     console.log("getEl:" + getEl.textContent);
    //     document.write("getEl:" + getEl.textContent + `<br>`);
    // }
    // }
    let jc = getDoc(_findEl).previousElementSibling.previousElementSibling.previousElementSibling.textContent = `${
      index + 1
    }: ` + boxStyle.justifyContent
    let ai = getDoc(_findEl).previousElementSibling.previousElementSibling.textContent = '/' + boxStyle.alignItems
    let fd = getDoc(_findEl).previousElementSibling.textContent = '/' + boxStyle.flexDirection
    let wp = getDoc(_findEl).previousElementSibling.textContent = "/" + boxStyle.flexDirection + "/" + boxStyle.flexWrap;

    jc;
    ai;
    fd;
    wp;
  }
  return

}

/**
 * FIXME: 連番Loop or オブジェクト（API化）
 */

let array = [
  '.box1',
  '.box2',
  '.box3',
  '.box4',
  '.box5',
  '.box6',
  '.box7',
  '.box8',
  '.box9',
  '.box10',
  '.box11',
  '.box12',
  '.box13',
  '.box14',
  '.box15',
  '.box16',
  '.box17',
  '.box18',
  '.box19',
  '.box20',
  '.box21',
  '.box22',
  '.box23',
  '.box24',
  '.box25',
  '.box26',
  '.box27',
  '.box28',
  '.box29',
  '.box30',
]
// array.length;

for (let x = 0; x < array.length; x++) {
  val(array[x], x)
}
