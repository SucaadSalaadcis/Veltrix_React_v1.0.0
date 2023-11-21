// const funn = document.getElementById('btnSave').innerHTML="Saved"
// const fun = ()=>{
// document.getElementById('pragraph').innerHTML="clicked"
// document.getElementById('btnSave').style="font-size:35px; color:red; background-color:black;"
// }


/* templete litrals or templete strings */
//  let a = "We Love" 
//  let b = "JavaScript"

//  console.log(a + " " +b ) // old
//  console.log(`${a} ${b}`) // new ES6



 console.log(2+2 ,5-2,2*8,6/2,2%2,2**4,2*2*2*2)
//  console.log(5-2)
//  console.log(2*8)
//  console.log(6/2)
//  console.log(2%2)
//  console.log(2**4) // 16
//  console.log(2*2*2*2) // 16

// console.log(35/2) // 17.5
// console.log(34/2) // 17 */


//  concatination 
//  let a = "We Love" // space hda rbtid sadarka itasorin "dhihin space kas bixine
//  let b = "JavaScript"
//  let c = " "
// console.log(a , b)
// document.write(a + " " + b ,"<br>") 
// document.write(a + c + b)

// let x = 10;
// x+=5 // 15
// x-=2 // 13
// x*=2 // 26
// x/=2 // 13
// x%=2 // 1
// x**=1 // 1*1 = 1

// console.log(`the value of x : ${x}`)

let fName = 'Ali'
let age = 3

// if(fName =='Ali' || age == 40){
//     console.log("yes")

// }

let f = true && true
let ff = true || false
let fff = !true 
console.log(`${f} ${ff} ${fff}`) 



// var x = ['text' , 'password', 'submit'];

// for (let i = 0 ; i <= 2 ; i++){
//     document.write(`<input type=${x[i]} />` ,"<br>")
// }

var r=['<div>','<p>','<h1>']

var c = ["good girl" ,"programming girl" ,"I love JS"]

 var d=["maroon"]

for(let j = 0; j <=2 ; j++){
    document.write(` ${r[j]} ${c[j]} <br>`) // ALX
    document.querySelector("div").style.color=`${d[j]}`;
   
    // document.append.body(`${d[j]}`)
   
}

// var n = 1;

// while(n <=5){
//     document.write("yes" +"<br>")
//     n++
// }

// var t = 1;

// do{
//     document.write("no" )
//     t++
// }while(t >=5)

// var x = prompt("what is your name")

// if(x=="suu"){
//     document.write("Correct")
// }








// var x = [ 1,2,3,4 ] ;

// for (y of x){
//  document.write(y)
//     // alert(y)
// }
// var aaabb = 1; 
// console.log(aaabb)

// console.log( typeof "suad sald cisman");
// console.log( typeof 77);
// console.log( typeof [10.12,13]);
// console.log( typeof ["saa","ali","duu"]);
// // object is key and value
// console.log( typeof {"name":'suu',"gender":'female'});
// console.log( typeof true);
// console.log( typeof undefined);
// console.log( typeof null);

function outPut(){
    let x = document.getElementById('pragraph').innerHTML='Hi js'
    // x.style.color="red";
}
outPut();


// function add (u , y){
//    document.getElementById('Add').innerHTML= u + y;
// }
// add(3,2);
function add (u , y){
   return u + y;
}
document.getElementById('Add').innerHTML=add(3,2);

// function Alert(){
//    let x = document.getElementById('alert').value;
//    alert(x)
// }
// Alert();



// listed function
// function lert(){
//     ler();
// }
// function ler(){
//   alert('helooow')
// }

// lert();

for(let pp in ['s','b','h']){
    document.write(pp) // returns array index 012
}

for(let pp in {'s':'suu','b':1,'h':1.2}){
    document.write(pp) // returns property sbh
}

for(let pp of {'s':'suu','b':1,'h':1.2}){
    console.log(pp) // dex.js:170 Uncaught TypeError
}