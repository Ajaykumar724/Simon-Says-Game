let gameSeq=[];
let userSeq=[];
let highScore=0;
let btns=["yellow","red","blue","green"];

let started=false;
let level=0;
let p=document.querySelector("p");
let body=document.querySelector("body");
// this is only demo
// let btn=document.querySelector(".box");

document.addEventListener("keypress",function (){
  if(started==false){
    started=true;
    levelUp();
    console.log("started");
  }
 });

 function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
    console.log("flash");
  },250);
 }
 
 function userFlash(btn){
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
    console.log("flash");
  },250);
 }
 function levelUp(){
  userSeq=[];
    level++;
    if(level>highScore){
      highScore=level;
    }
    p.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
  }
   
function checkAns(idx){
  if(userSeq[idx]===gameSeq[idx]){  
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
    }
  }else{

    body.classList.add("red");
    setTimeout(function () {
      body.classList.remove("red");
      console.log("over game");
    },250);
    p.innerHTML=`Game over!High Score is <b>${highScore}</b>.</br> Your score was <b>${level}</b> </br> Press any key to start.`;
    reset();
  }
}

function btnPress(){
  console.log(this);
  let btn = this;
  userFlash(btn);

  userColor=btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".box");
for(btn of allBtns){
  btn.addEventListener("click",btnPress);
}

function reset(){
  started =false;
  gameSeq=[];
  userSeq=[];
  level=0;
}