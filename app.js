let gameseq=[];
let userseq=[];
let btns=["yellow","purple","red","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let maxleve=-1;
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelup();
    }
});

function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
};
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
      btn.classList.remove("userflash");
    },250);
  };
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
     let randIdx=Math.floor(Math.random()*3);
     let randcolor=btns[randIdx];
     let randbtn=document.querySelector(`.${randcolor}`);
     gameseq.push(randcolor);
    btnFlash(randbtn);
}
function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
           setTimeout(levelup(),1000);
        }

    } 
    else{
        h2.innerHTML=`Game over!! your score was <b>${level}</b> <br> press any key to start the game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset(level);
    }
}

function btnpress(){
let btn=this;
userFlash(btn);
usercolor=btn.getAttribute("id");
userseq.push(usercolor);
checkans(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function reset(lev){
    gameseq=[];
    userseq=[];
    started=false;
    level=0;
    if(lev>maxleve){
       maxleve=lev;
      h3.innerText=`High Score ${lev}`;
    }
}