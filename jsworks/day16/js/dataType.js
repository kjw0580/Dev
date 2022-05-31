window.onload = function(){
//number
var num1 = 10;
var num2 = 10.2;
var num3 = 1e+2; //지수(e) 10의 세제곱 

console.log(num1 + ", " + num2 + ", " + num3);

//string

var str1 = '문자';
var str2 = "문자는 '문자'" ;
var str3 = '문자는 "문자"';
var str4 = 'you\'re too smart...';
console.log(str1 + ", " + str2 + ", " + str3 + ", " + str4);



//boolean
let com1 = (5 > 4);
let com2 = (5 < 4);

console.log(com1 + ", " + com2)

//undefined
let storage; //변수 선언 후 값을 입력 하지 않음
//storage = "A";
console.log(storage);



//null
let gnb = document.getElementById('gnb');
gnb.style.listStyle = "none";
console.log(gnb);

let qwe = document.getElementById('demo');
qwe.innerHTML = "안녕하세요";
console.log(qwe);

//type of
let type1 = 10;
let type2 = '문자';
let type3 = true;
console.log(typeof(type1) + ", " + typeof(type2) + ", " + typeof type3)
}