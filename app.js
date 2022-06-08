/*const player = {
    name:"nico",
    sayHello:   function(otherPersonsName){
        console.log("hello!" + otherPersonsName + " nico to meet you");
    },
};

console.log(player.name)
player.sayHello("lynn");
 */
/*
let hello;
console.log(hello);*/

/*
const me = "sexy"
const days = [1,2,false, true,null,undefined,me,"text"];
console.log(days);*/

/*
const toBuy = ["감자","토마토","피자"];
console.log(toBuy);
toBuy[2] = "water";
console.log(toBuy);
toBuy.push("one");
console.log(toBuy);
*/
/*
const player = {
    name : "nico",
    age: 98,
};
console.log(player);
player.name = " niqwe";
console.log(player);
player.qwe = "soon";
console.log(player,console);
*/
/*
function plus(){
console.log(2+2);

}
alert("asasd");
*/
/*
function minusFive(po){
    console.log(po-5);

}
minusFive(2,3,4,5,6);*/

/*const a ={
 qwe:function(a,b){
    alert(a**b);
 },
 qwe2:function(a,b){
    alert(a*b);
 },
 qwe3:function(a,b){
    alert(a/b);
 },
 qwe4:function(a,b){
    alert(a+b);
 },

};
consol*/
/*
const age = 96;
function caluca(age0fsd){
     age0fsd +2;
     return "ji";
}
const ad =caluca(age);
console.log(ad);*/
/*
const a ={
    qwe: function(a,b){
       return a + b;
    },
    qwe2: function(a,b){
        return a-b ;
    },
    qwe3: function(a,b){
        return a/b;
    },
    qwe4: function(a,b){
        return a*b;
    },

   };

   const qw = a.qwe(2,3);
   const qw2 = a.qwe2(2,3);
   const qw3 = a.qwe3(10,9);*/
   //const name = prompt("너 누구야");
/*const age =parseInt(prompt("몇살"));

if(isNaN (age))
{
    age === true
 console.log("숫자를 입력해주세요");
}
*/
/*
const age =parseInt(prompt("몇살"));

if(isNaN(age))
{
 console.log("숫자를 입력해주세요");
}
else{
    console.log("나이 입력됨");
}
*/
/*
const age = parseInt(prompt("나이를 입력해주세요"));

if(isNaN(age)){
    console.log("숫자를 입력해주세요");

}
else if(age<18)
{
    console.log("당신은 어려요");
}
else if(age <= 50 && age >= 18)
{
    console.log("당신은 술을 마실 수 있는 나이입니다");
}
else if(age > 50 && age <= 80){
    console.log("운동해야됨");
}
else if (age>80);
{
    console.log(


}*/
/*.
const title = document.querySelector(".hello h1");
//title.innerText = "got you";

console.log(title);
//console.log(title.className);
consol.log();z*/
/*
const title = document.getElementById("something");

title.innerText = "hi!";
console.log(title.className);*/


//const title = document.querySelector("div.hello:first-child h1");
/*const title = document.querySelector("#hello form");
const title1 = document.getElementById("hello");
console.log(title,title1);*/

//const title = document.querySelector(".hello h1");

//console.dir(title);
//title.style.color =" blue";
//const h1 = document.querySelector("div.hello:first-child h1");

//function a(){
    //console.log("title was clicked!");
 //   h1.style.color = "blue";
//}
/*
function a(){
 

    h1.innerText ="마우스는 여기있어!";
}
function b(){
 

h1.innerText="마우스는 여기없어!";
}

function hj(){
document.body.style.backgroundColor ="tomato";
}
function asd(){
    alert("copier");
}
function off(){
    alert("no wifi");
}
function on(){
    alert("online");
}

h1.addEventListener("click", h);//클릭
h1.addEventListener("mouseenter",a);//마우스를 올리면 작동
h1.addEventListener("mouseleave",b);//마우스를 그 개체에서 때면 작동

window.addEventListener("resize",hj);//창크기를 바꾸면 작동
window.addEventListener("copy",asd);//사용자가 복사를하면 작동
window.addEventListener("offline",off);//오프라인이면 작동
window.addEventListener("online",on);//온라인이면 작동*/
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass))
    {
        h1.classList.remove(clickedClass);
    }
    else{
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click",handleTitleClick);
*/
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
  h1.classList.toggle("clicked")
}

h1.addEventListener("click",handleTitleClick);
*/


const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function buttonclick(){
    //console.log("hello",loginInput.value);
    const username = loginInput.value
    if(username === ""){
alert("please write name");
    }
    else if(username.length>15){
alert("15자 안으로 이름을 작성해주세요");
    }
    else{
        console.log("hello",loginInput.value);
    }
}
loginButton.addEventListener("click",buttonclick);