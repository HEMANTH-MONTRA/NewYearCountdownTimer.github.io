
 const days=document.querySelector("#days");/*connecting html to js */
 const hours=document.querySelector("#hours");
 const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");
function Updatetime(){
 const currentyear=new Date().getFullYear();/* current year*/
const newyear= new Date (`january 1 ${currentyear+1} 00:00:00`);/* checking new year date*/
const currentDate=new Date();/* current date*/
const diff= newyear-currentDate;/* no of dates  in sec*/
const d=Math.floor(diff/1000/60/60/24);/*1000ms=1s,60s=1m,60m=1hr,24hr=1day*/
const h=Math.floor((diff/1000/60/60)%24);/*hours */
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);
days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;
}

setInterval(Updatetime,1000);




