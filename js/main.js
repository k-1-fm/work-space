//おみくじ運勢のデータ定義
const fortunes = [
  {
    name: "大吉",
    // img: "", // imgパスの追記
    messages: "努力してきたことが実を結ぶ一日。自信を持って進もう。",
  },
  {
    name: "吉",
    // img: "",
    messages: "安定した運気。身近な幸せを大切にすると良い流れになる。",
  },
  {
    name: "中吉",
    // img: "",
    messages: "少しずつ運気上昇中。焦らず着実に進むことがポイント。",
  },
  {
    name: "小吉",
    // img: "",
    messages: "控えめながらも良い兆しあり。小さな成功を積み重ねよう。",
  },
  {
    name: "末吉",
    // img: "",
    messages: "これから運気が上向く途中。今は準備を意識すると良い。",
  },
  {
    name: "凶",
    // img: "",
    messages: "慎重さが必要な時期。無理せず落ち着いて行動しよう。",
  },
  {
    name: "大凶",
    // img: "",
    messages: "今は流れに逆らわず、守りを意識することが大切。",
  },
];

//ラッキーアイテム
const luckyItems = [
  "ノート",
  "ペン",
  "イヤホン",
  "財布",
  "本",
  "鍵",
  "スマホケース",
];

//ラッキーカラー
const luckyColors = [
  "赤色",
  "青色",
  "緑色",
  "黄色",
  "白色",
  "黒色",
  "ピンク",
];

//ラッキーお菓子
const luckySnacks = [
  "チョコレート",
  "おにぎり",
  "ポテトチップス",
  "アイスクリーム",
  "クッキー",
  "どら焼き",
  "フルーツタルト",
];


// 0~6 でランダムな整数(インデックス)を返す
function getRandomIndex(){
    const index = Math.floor(Math.random() * 7);
    return index;
}

// 運勢データを取得
function getFortune(){
    const index = getRandomIndex();
    return fortunes[index];
}

// ラッキーアイテムを取得
function getLuckyItem(){
    const index = getRandomIndex();
    return luckyItems[index];
}

// ラッキーカラーを取得
function getLuckyColor(){
    const index = getRandomIndex();
    return luckyColors[index];
}

function getLuckySnack(){
    const index = getRandomIndex();
    return luckySnacks[index];
}

// おみくじのアイテムを取得する
// omikujiItems = [fortune, luckyItem, luckyColor, luckySnack]
function getOmikujiItems(){
    const omikujiItems = [];
    
    const fortune = getFortune();
    omikujiItems.push(fortune);
    const luckyItem = getLuckyItem();
    omikujiItems.push(luckyItem);
    const luckyColor = getLuckyColor();
    omikujiItems.push(luckyColor);
    const luckySnack = getLuckySnack();
    omikujiItems.push(luckySnack); 
    
    return omikujiItems;
}


// 画面表示
// トップページを非表示にして、おみくじページを表示
function dispayTopToOmikuji(omikujiItems){
    // トップページの非表示
    const topPage = document.querySelector("#js-topPage");
    topPage.setAttribute("hidden", "true");
    
    const omikujiPage = document.querySelector("#js-omikujiPage");
    // おみくじページの内容
    omikujiPage.innerHTML = `
    <h1>${omikujiItems[0].name}</h1>
    <div>
        <h2>ラッキーアイテム</h2>
        ${omikujiItems[1]}
    </div>
    <div>
        <h2>ラッキーカラー</h2>
        ${omikujiItems[2]}
    </div>
    <div>
        <h2>ラッキーお菓子</h2>
        ${omikujiItems[3]}
    </div>
    <button type="button" id="js-reDrawButton">もう一度引く</button>
    `;
}

// おみくじを引いて、おみくじ画面に変える
function drawOmikuji(){
    const omikujiItems = getOmikujiItems();
    dispayTopToOmikuji(omikujiItems);
    document.querySelector("#js-reDrawButton").addEventListener("click", reDrawOmikuji);
}

// おみくじページでボタンが押されたら
// おみくじページの内容を初期化して、トップページを再表示
function reDrawOmikuji(){
    const omikujiPage = document.querySelector("#js-omikujiPage");
    const topPage = document.querySelector("#js-topPage");
    
    omikujiPage.innerHTML = "";
    topPage.removeAttribute("hidden");
}

document.querySelector("#js-drawButton").addEventListener("click", drawOmikuji);
