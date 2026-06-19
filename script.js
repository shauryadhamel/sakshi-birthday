function blowCandles(){

document.getElementById("flames").innerHTML="";

document.getElementById("birthdayWish").innerHTML=

"🎆 Happy Birthday Sakshi ❤️ Make a wish 🎉";

for(let i=0;i<50;i++){

let confetti=document.createElement("div");

confetti.className="confetti";

confetti.innerHTML="🎉";

confetti.style.left=Math.random()*100+"%";

document.body.appendChild(confetti);

let pos=0;

let fall=setInterval(()=>{

pos+=5;

confetti.style.top=pos+"px";

if(pos>window.innerHeight){

clearInterval(fall);

confetti.remove();

}

},30);

}

}