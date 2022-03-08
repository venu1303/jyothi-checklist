var restart=document.querySelector("#one");
function uncheckElements()
{
    console.log("yeah doing");
 var uncheck=document.getElementsByTagName('input');
 for(var i=0;i<uncheck.length;i++)
 {
  if(uncheck[i].type=='checkbox')
  {
   uncheck[i].checked=false;
  }
 }
 var ans=document.querySelector("#op");
 ans.textContent="";
}
var count=0;
function countcheck()
{
 console.log("yeah bro");
 var uncheck=document.getElementsByTagName('input');
 for(var i=0;i<uncheck.length;i++)
 {
  if(uncheck[i].type=='checkbox')
  {
    if(uncheck[i].checked===true){count++;}
  }
 }
 var ans=document.querySelector("#op");
 var str="YOUR TOTAL COUNT IS "+count+" Jyothi"
 ans.textContent=str;
 count=0;
}
var bun=document.querySelector("#two");
restart.addEventListener("click",uncheckElements);
bun.addEventListener("click",countcheck);