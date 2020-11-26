var clock = setInterval(doughclk,1000);
var save = setInterval(saveGame,5000);
var dough = new Number(getCookie("dough"));
var dps = new Number(getCookie("dps"));
var dpsBoost = new Number(getCookie("dpsBoost"));
var dpc = new Number(getCookie("dpc"));
var month = new Date();
var monthname = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var statroll = ["Roll",2,0.5,2]
var currentMonth = monthname[month.getMonth()];
var rollbought = new Number(getCookie("rollbought"));
var wholewheatbought = new Number(getCookie("wholewheatbought"));
var sourdoughbought = new Number(getCookie("sourdoughbought"));
var baguettebought = new Number(getCookie("baguettebought"));
var croissantbought = new Number(getCookie("croissantbought"));
var bananabreadbought = new Number(getCookie("bananabreadbought"));
var seasonalbreadbought = new Number(getCookie("seasonalbreadbought"));
var cornbreadbought = new Number(getCookie("cornbreadbought"));
var butterbought = new Number(getCookie("butterbought"));
var sjambought = new Number(getCookie("sjambought"));
var gjelbought = new Number(getCookie("gjelbought"));
var margbought = new Number(getCookie("margbought"));
var sseasbought = new Number(getCookie("sseasbought"));
var honbought = new Number(getCookie("honbought"));
var currentBread;
var slideIndex=1;
var songq = 0;
var item = ["roll","wholewheat","sourdough","baguette","croissant","bananabread","seasonalbread","cornbread","butter","sjam","gjel","marg","sseas","hon"]

var toasterprice = new Number(getCookie("toasterprice"));
var ovenprice = new Number(getCookie("ovenprice"));
var bakerprice = new Number(getCookie("bakerprice"));
var bakeryprice = new Number(getCookie("bakeryprice"));
var wheatfarmprice = new Number(getCookie("wheatfarmprice"));
var mixerprice = new Number(getCookie("mixerprice"));

if(toasterprice===0){var toasterprice=25;}
if(ovenprice===0){var ovenprice=1000;}
if(bakerprice===0){var bakerprice=5000;}
if(bakeryprice===0){var bakeryprice=10000;}
if(wheatfarmprice===0){var wheatfarmprice=25000;}
if(mixerprice===0){var mixerprice=50000;}



var statsroll  = { id:2, name:"Roll",                 cost:50,       dpc:2,  dpsinc: 0.1 }
var statswheat = { id:3, name:"Wheat",                cost:250,      dpc:3,  dpsinc: 0.5 }
var statssour  = { id:4, name:"Sourdough",            cost:500,      dpc:4,  dpsinc: 0.5 }
var statsbagu  = { id:4, name:"Baguette",             cost:2500,     dpc:4,  dpsinc: 1   }
var statscroi  = { id:5, name:"Croissant",            cost:5000,     dpc:6,  dpsinc: 1   }
var statsbana  = { id:6, name:"Banana Bread",         cost:10000,    dpc:8,  dpsinc: 2   }
var statsbseas = { id:7, name:"Seasonal Bread",       cost:25000,    dpc:10, dpsinc: 2   }
var statscorn  = { id:8, name:"Cornbread",            cost:50000,    dpc:12, dpsinc: 2   }
var statsengl  = { id:9, name:"English Muffin Bread", cost:125000,   dpc:15, dpsinc: 3   }


if(currentBread==null){currentBread="r/Bsprite1.png"}
document.addEventListener("keypress", function keystroke(name) {
    if(name.key==="b"){
      togglepages("breadstore");
      document.getElementById("spreadstore").style.visibility="hidden";
      document.getElementById('statsmenu').style.visibility="hidden";
      document.getElementById('upgradestore').style.visibility="hidden";
    }
    if(name.key==="s"){
      document.getElementById("breadstore").style.visibility="hidden";
      togglepages("spreadstore");
      document.getElementById('statsmenu').style.visibility="hidden";
      document.getElementById('upgradestore').style.visibility="hidden";
    }
    if(name.key==="t"){
      document.getElementById("breadstore").style.visibility="hidden";
      document.getElementById("spreadstore").style.visibility="hidden";
      togglepages("statsmenu");
      document.getElementById('upgradestore').style.visibility="hidden";
    }
    if(name.key==="u"){
      document.getElementById("breadstore").style.visibility="hidden";
      document.getElementById("spreadstore").style.visibility="hidden";
      document.getElementById('statsmenu').style.visibility="hidden";
      togglepages("upgradestore");
    }
});
function togglepages(id){
  if(document.getElementById(id).style.visibility=="visible"){
    document.getElementById(id).style.visibility="hidden";
  }
  else{
    document.getElementById(id).style.visibility="visible";
  }
 }
function loadGame(){
  
  0==dpc&&(dpc=1),1==dpsBoost;
  for(var i = 0; i <= 13; i++){
    var box = ("item-" + item[i]);
    if(getCookie(item[i] + "bought")==1)document.getElementById(box).style.filter = "brightness(0.4)";
  }
  document.getElementById("toastercost").innerHTML = Math.round(toasterprice);
  document.getElementById("ovencost").innerHTML = Math.round(ovenprice);
  document.getElementById("bakercost").innerHTML = Math.round(bakerprice);
  document.getElementById("bakerycost").innerHTML = Math.round(bakeryprice);
  document.getElementById("wheatfarmcost").innerHTML = Math.round(wheatfarmprice);
  document.getElementById("mixercost").innerHTML = Math.round(mixerprice);
  document.getElementById("dpsnum").innerHTML=Math.round(((dps*dpsBoost)+Number.EPSILON)*100)/100,
  document.getElementById("doughnum").innerHTML=Math.round(dough);
  if(getCookie("currentBread").includes("Bsprite")==true){
    document.getElementById("bread").src = getCookie("currentBread");
  }
  else{
    document.getElementById("bread").src = "r/Bsprite1.png";
    
  };
  document.getElementById("statDPC").innerHTML =dpc;
 }


function doughclk(){dough+=(dps*dpsBoost);document.getElementById("doughnum").innerHTML = Math.round(dough);}
function clicked(){dough+=dpc;document.getElementById("doughnum").innerHTML = Math.round(dough);sfxhandler('click');}
function saveGame() {
  setCookie("dough", Math.round(dough));
  setCookie("dps", dps);
  setCookie("dpc", Math.round(dpc*100+Number.EPSILON)/100);
  setCookie(item[i] + "bought")
  setCookie("rollbought", rollbought);
  setCookie("wholewheatbought", wholewheatbought);
  setCookie("sourdoughbought", sourdoughbought);
  setCookie("baguettebought", baguettebought);
  setCookie("croissantbought", croissantbought);
  setCookie("bananabreadbought", bananabreadbought);
  setCookie("seasonalbreadbought", seasonalbreadbought);
  setCookie("cornbreadbought", cornbreadbought);
  setCookie("butterbought", butterbought);
  setCookie("sjambought", sjambought);
  setCookie("gjelbought", gjelbought);
  setCookie("margbought", margbought);
  setCookie("sseasbought", sseasbought);
  setCookie("honbought", honbought);
  setCookie("currentBread", document.getElementById("bread").src);
  setCookie("dpsBoost", dpsBoost);
  setCookie("toasterprice", toasterprice);
  setCookie("ovenprice", ovenprice);
  setCookie("bakerprice", bakerprice);
  setCookie("bakeryprice", bakeryprice);
  setCookie("wheatfarmprice", wheatfarmprice);
  setCookie("mixerprice", mixerprice);
 }
//if it hasn't been bought and there is enough dough,
//send the parameters to change to the function buyupdate(),
//and set bought variable to 1 so it can't be bought again.
function roll(){if(rollbought==0&&dough>=50){breadupdate(50,2,0.1,2,"item-roll");rollbought=1;}}
function wheat(){if(wholewheatbought==0&&dough>=250){breadupdate(250,3,0.5,3,"item-wholewheat");wholewheatbought=1;}}
function sour(){if(sourdoughbought==0&&dough>=500){breadupdate(500,4,0.5,4,"item-sourdough");sourdoughbought=1;}}
function bag(){if(baguettebought==0&&dough>=2500){breadupdate(2500,5,1,5,"item-baguette");baguettebought=1;}}
function croi(){if(croissantbought==0&&dough>=5000){breadupdate(5000,6,1,6,"item-croissant");croissantbought=1;}}
function bana(){if(bananabreadbought==0&&dough>=10000){breadupdate(10000,8,2,7,"item-bananabread");bananabreadbought=1;}}
function bseas(){if(seasonalbreadbought==0&&dough>=25000){breadupdate(25000,10,2,currentMonth,"item-seasonalbread");seasonalbreadbought=1;}}
function corn(){if(cornbreadbought==0&&dough>=50000){breadupdate(50000,12,2,8,"item-cornbread");cornbreadbought=1;}}

function butter(){if(butterbought==0&&dough>=100){spreadupdate(100,1.01,1,"item-butter");butterbought=1;}}
function sjam(){if(sjambought==0&&dough>=1000){spreadupdate(1000,0.01,2,"item-sjam");sjambought=1;}}
function gjel(){if(gjelbought==0&&dough>=5000){spreadupdate(5000,0.02,3,"item-gjel");gjelbought=1;}}
function marg(){if(margbought==0&&dough>=10000){spreadupdate(10000,0.02,4,"item-marg");margbought=1;}}
function sseas(){if(sseasbought==0&&dough>=25000){spreadupdate(25000,0.03,currentMonth,"msseas");sseasbought=1;}}
function hon(){if(honbought==0&&dough>=50000){spreadupdate(50000,0.03,5,"item-hon");honbought=1;}}

function toaster(){
  if(dough>=toasterprice){
    dough-=toasterprice;
    dps+=0.1;
    toasterprice+=((1/3)*toasterprice);
    document.getElementById("toastercost").innerHTML = Math.round(toasterprice);
    document.getElementById("doughnum").innerHTML = Math.round(dough);
    document.getElementById("dpsnum").innerHTML = Math.round(dps*dpsBoost*100)/100;
    sfxhandler('upgrade');
  }
 }
function oven(){
  if(dough>=ovenprice){
    dough-=ovenprice;
    dps+=0.5;
    ovenprice+=((1/3)*ovenprice);
    document.getElementById("ovencost").innerHTML = Math.round(ovenprice);
    document.getElementById("doughnum").innerHTML = Math.round(dough);
    document.getElementById("dpsnum").innerHTML = Math.round(dps*dpsBoost*100)/100;
    sfxhandler('upgrade');
  }
 }
function baker(){
  if(dough>=bakerprice){
    dough-=bakerprice;
    dps+=1;
    bakerprice+=((1/3)*bakerprice);
    document.getElementById("bakercost").innerHTML = Math.round(bakerprice);
    document.getElementById("doughnum").innerHTML = Math.round(dough);
    document.getElementById("dpsnum").innerHTML = Math.round(dps*dpsBoost*100)/100;
    sfxhandler('upgrade');
  }
 }
function bakery(){
  if(dough>=bakeryprice){
    dough-=bakeryprice;
    dps+=2;
    bakeryprice+=((1/3)*bakeryprice);
    document.getElementById("bakerycost").innerHTML = Math.round(bakeryprice);
    document.getElementById("doughnum").innerHTML = Math.round(dough);
    document.getElementById("dpsnum").innerHTML = Math.round(dps*dpsBoost*100)/100;
    sfxhandler('upgrade');
  }
 }
function wheatfarm(){
  if(dough>=wheatfarmprice){
    dough-=wheatfarmprice;
    dps+=5;
    wheatfarmprice+=((1/3)*wheatfarmprice);
    document.getElementById("wheatfarmcost").innerHTML = Math.round(wheatfarmprice);
    document.getElementById("doughnum").innerHTML = Math.round(dough);
    document.getElementById("dpsnum").innerHTML = Math.round(dps*dpsBoost*100)/100;
    sfxhandler('upgrade');
  }
 }
function mixer(){
  if(dough>=mixerprice){
    dough-=mixerprice;
    dps+=10;
    mixerprice+=((1/3)*mixerprice);
    document.getElementById("mixercost").innerHTML = Math.round(mixerprice);
    document.getElementById("doughnum").innerHTML = Math.round(dough);
    document.getElementById("dpsnum").innerHTML = Math.round(dps*dpsBoost*100)/100;
    sfxhandler('upgrade');
  }
 }


function breadupdate(cost,ndpc,dpsinc,id,item){
  //after receiving parameters from above, this function
  //changes all of the needed variables to complete the
  //transaction.
  dough-=cost;
  dpc=ndpc;
  dps+=dpsinc;
  currentBread = ("r/Bsprite"+id+".png");
  setCookie("currentBread", currentBread);
  document.getElementById("bread").src = (currentBread);
  document.getElementById("doughnum").innerHTML = Math.round(dough);
  document.getElementById("dpsnum").innerHTML = Math.round(dps*dpsBoost*100)/100;
  document.getElementById("statDPC").innerHTML =dpc;
  document.getElementById(item).style.filter = "brightness(0.4)";
  sfxhandler('upgrade');
 }
function spreadupdate(cost,dpsperc,id,item){
  dough-=cost;
  dpsBoost+=dpsperc;
  document.getElementById("doughnum").innerHTML = Math.round(dough);
  document.getElementById("dpsnum").innerHTML = Math.round(dps*dpsBoost*100)/100;
  document.getElementById(item).style.filter = "brightness(0.4)";
  sfxhandler('upgrade');
 }

function setCookie(a,b){document.cookie=a+"="+b+";;path=/"}
function getCookie(a){
  for(var b,d=a+"=",e=document.cookie.split(";"),f=0;f<e.length;f++){
    for(b=e[f];" "==b.charAt(0);)b=b.substring(1);
    if(0==b.indexOf(d))return b.substring(d.length,b.length)
  }
  return""
}

var collection=[];
var loadedIndex=0;
function init(audios) {
  for(var i=0;i<audios.length;i++) {
    var audio = new Audio(audios[i]);
    collection.push(audio);
    buffer(audio);
  }
}
function buffer(audio) {
  if(audio.readyState==4)return loaded();
  setTimeout(function(){buffer(audio)},100);
}
function loaded() {
  loadedIndex++;
  if(collection.length==loadedIndex)playLooped();
}
function playLooped() {
  var audio=Math.floor(Math.random() * (collection.length));
  audio=collection[audio];
  audio.play();
  setTimeout(playLooped,audio.duration*1000);
}
function audio(){if(songq==0)init(['r/Asoundtrack1.mp3','r/Asoundtrack2.mp3','r/Asoundtrack3.mp3']),songq++}

function sfxhandler(sound){
  if(sound==="click"){
    var audio = new Audio("r/Aclick1.mp3");
    audio.play();
  }
  if(sound==="upgrade"){
    var audio = new Audio("r/Aupgrade1.mp3");
    audio.play();
  }
}