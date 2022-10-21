const cardArray = [
  {name: 'scientist',
  img: '  ../images/neuman.jpg'},
  {name: 'scientist',
  img: '../images/neuman.jpg'},
  {name: 'lady',
  img: '../images/nobume.jpg'},
  {name: 'lady',
  img: '../images/nobume.jpg'},
  {name: 'girl',
  img: '../images/girl.jpg'},
  {name: 'girl',img: '../images/girl.jpg'}
]
// 
cardArray.sort(()=>0.5 - Math.random())

const grid = document.querySelector('#grid');
// cardの配列から名前のみの配列をつくる
let cardChodesn = []
// cardの配列と同じ数の数字が格納されている。重複しないようにする
// トリガーの役割
let cardChodesnIds =[]
const cardsWon = []
function createBoard(){
  for(let i=0; i< cardArray.length; i++){
    const card = document.createElement('img');
     card.setAttribute('card-id', i);
     card.addEventListener('click',flip);
     card.setAttribute('src', '../images/so-men.jpg');
     grid.appendChild(card);
  }
}
createBoard();

function checkMatch(){
  const cards = document.querySelectorAll('img');
  const optionOneId = cardChodesnIds[0]
  const optionTwoId = cardChodesnIds[1]

  if(optionOneId == optionTwoId){
    console.log("---");
  }
  if(cardChodesn[0] == cardChodesn[1]){
    console.log("--aaa-");
    alert('great');
    cards[optionOneId].setAttribute('src', '../images/blank.png');
    cards[optionTwoId].setAttribute('src', '../images/blank.png');
    cards[optionOneId].removeEventListener('click',flip)
    cards[optionTwoId].removeEventListener('click',flip)
    cardsWon.push(cardChodesn)
  }else{
    cards[optionOneId].setAttribute('src', '../images/so-men.jpg');
    cards[optionTwoId].setAttribute('src', '../images/so-men.jpg');
  }
   cardChodesn = []
   cardChodesnIds =[]
  if(cardsWon.length ==(cardArray.length/2)){
    const result =document.querySelector('#result');
    result.innerText = 'Great!'
  }
  }
  

function flip(){
 console.log("clicked");
 const cardid = this.getAttribute('card-id');
 cardChodesn.push(cardArray[cardid].name)
 cardChodesnIds.push(cardid)
 this.setAttribute('src',cardArray[cardid].img);
  if(cardChodesn.length == 2){
    setTimeout(checkMatch,200)
  }
}