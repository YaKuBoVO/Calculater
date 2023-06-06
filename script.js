

//let a = 15 > 5 ? "Bir" : "Ikki";

//`
//<h1>${ a > 0 ? "Salom" : "Xayr"} ${[1,2].map(
//   (item) => `<li>${item}</li>`
//)} </h1>
//`; console.log(a);


// JUFT RAQAMLAR TOPISH KODI

//let a =1;
//let b = 10;
//if(a % 2 == 0) a=a;
//else a=a +1;
//for(let i = a; i<=b; i+=2)
//console.log(i);


// SONNI CONSOLGA CHIQARIDIGAN DASTUR
//let a = 21;
//let s = "";
//let k = "";

//switch ( a % 10 ) {
//   case 1:
//      s = "bir";
//      break;
//      case 2:
//      s = "ikki";
//      break;
//         case 3:
//      s = "Uch";
//      break;
//         case 4:
//      s = "tort";
//      break;
//         case 5:
//      s = "Besh";
//      break;
//         case 6:
//      s = "Olti";
//      break;
//         case 7:
//      s = "Yetti";
//      break;
//         case 8:
//      s = "Sakkiz";
//      break;
//         case 9:
//      s = "Toqqiz";
//      break;
//         case 10:
//}


//switch (( a - ( a % 10)) / 10) {
//   case 1:
//      k = "o'n";
//      break;
//         case 2:
//      k = "yigirma";
//      break;
//         case 3:
//      k = "Ottiz";
//      break;
//         case 4:
//      k = "Qirq";
//      break;
//         case 5:
//      k = "Ellik";
//      break;
//         case 6:
//      k = "Oltmish";
//      break;

//}

//console.log(k  + " " + s);




//function nameFun(a, b = 20) {
//   return [5, 15, 20].map((item) => item);
//}
//let res = nameFun(15, 30);
//let resk = nameFun(65, 30);

//console.log(resk);


//function math(a, b) {
//   function icr(a, b) {
//      return a + b;
//   }
//   function dec(a, b) {
//      return a - b;
//   }
//   let k = a > 18 ? "Welcome" : "Bye Bye";

//   return {
//      inc: icr (a, b),
//      dec: dec (a, b),
//      sayHello: k,
//      name: "Salom",
//   };
//}

//let res = math(30, 20);
//console.log(res);







// MANIMCHA MASSIV
//let arr = "Sobir";
//let a = [10, ...arr];
//console.log(a);


//function myFun(a, ...args) {
//   console.log(args);
//}
//myFun(...arr);



//const max = function (a) {
//   a[0] = 10;
//   console.log(a);
//};
//const arr = [1, 2, 3, 4];
//let b = [];
//b = arr;
//max(arr);
//console.log(arr);





//const max = function ({ name, age, lastName }) {
//   //console.log(age);
//};

//let user = {
//   lastName: "Yakubov",
//   name: "Otabek",
//   age: 23,
//};
//max(user);
//console.log(user);





   // BILMADIM NIMA KODI
//const yes = function () {
//   console.log("yes");
//};
//const no = function () {
//   console.log("no");
//};
//const isPriNumber = function (n, yesMsg, noMsg) {
//   for (let i = 2; i <= n ** 0.5; i++) {
//      if ( n % i === 0) {
//         noMsg();
//         return;
//      }
//   }
//   yesMsg();
//};
//isPriNumber(37, yes, no);






// BUTTON CLICK QILISH KODI
//let btn = document.querySelector("btn");
//btn.addEventListener("click", function () {
//   console.log("Salom");
//});





   // MANIMCHA BUYAM MASSIV
//[1, 2, 3, 4].map ((index) => {
//   console.log(index);
//});





// bu kodni nomi esimdan chiqdi
//function one() {
//   two();
//   console.log("one");
//}

//function two() {
//   thrre();
//   console.log("two");
//}

//function thrre() {
//   four();
//   console.log("thrre");
//}

//function four() {
//   five();
//   console.log("four");
//}

//function five() {
//   console.log("five");
//}
//one();




// EGG-HEN = TUXUM-TOVUQ
//let count = 0;
//function egg() {
//   count++;
//   console.log(count);
//   hen();
//}
//function hen() {
//   egg();
//}
//egg();




//document.getElementById("demo").innerHTML;

//let hederTitle = document.getElementById("demo");
//console.log(hederTitle);
//hederTitle.innerHTML = 'Hello'
//hederTitle.innerHTML = '<h3>Hello</h3>';






// TUGMANI BOSSA ALERTGA CHIQADI
//document.getElementById("btn").onclick = function() {
//   alert("I am Yakubov Otabek");
//}



// BUTTON KORSATIB YOQ QILADIGAN FUNCTIYA
//function show() {
//   document.getElementById('demo').style.display = "block"
//}
//function hide() {
//   document.getElementById('demo').style.display = "none"
//}




// OCHIRMA CALCULATONIKI

function myFunc(message) {
   calculator.display.value += message;
}

//myFunc();