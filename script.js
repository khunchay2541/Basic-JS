//======= การแสดงผล ======================================================
//console.log("hello");
//document.getElementById("text").innerHTML = "chaynoy"; //ที่หน้า html
//document.write("hello");
//window.alert("alert box");

//===== operators + - * / **(ยกกำลัง) %(มอด หาเศษ)
// x++ ให้ค่า x ก่อนบวก
// ++x ให้ค่า x หลังบวก
// var x = 10
// console.log(++x)
// console.log(x)

//======== function =====================================================
function changeBg(value1, value2) {
    document.body.style.backgroundColor = "green" //example
    document.getElementById("text").innerHTML = Date();
    return value1 * value2
}
//console.log(changeBg(5, 5));

//===============  แปลง F to C ===================================
function fToC(fahrenheit){
    var ftemp = fahrenheit
    var fToC = (ftemp-32)* 5 / 9;
    console.log(fToC.toFixed(2))//ทดศนิยม 2 ค่า
}
//fToC(150)

//============ Object =============================================
console.log("============= Object ====================")
//ตัวแปรที่เก็บได้หลายค่า
var person = {
    firstname: "Chaynoy",
    lastname: "Naysai",
    eyeColor: "black",
    fullname: function() {
        return this.firstname + " " + this.lastname
    }
    //this หมายถึง ชื่อ object (person แทนได้)

};
//การเข้าถึง
console.log(person.firstname)
console.log(person["firstname"])
console.log("เรียกใช้ method ใน obj"+person.fullname()) //เรียกใช้ method

//========== this keyword =======================================
//    this หมายถึง ชื่อ object (person แทนได้)

//============== javascrip Event =============================
//ex onClick="ฟังก์ชัน"

//=========== การทำงานกับ String =============================
console.log("============= การทำงานกับ String ============")
var xString = "chaynoy \n \"chay\"" // \n ขึ้นบรรทัดใหม่
console.log(xString)
console.log("ความยาว "+ xString.length)//ความยาวตัวอักษร

//============= Array ========================================
console.log("============= Array =======================")
//เป็น obj ชนิดหนึ่งแต่ เข้าถึงโดยใช้ตัวเลข object ชื่อ propertie
// Array Literal นิยม
var myArr = ["BMW", "Ford", "Honda" ]
console.log(myArr)
console.log(myArr[2])

//=========== Array method ====================================
console.log("============= Array method =======================")
var fruits = ["Banan", "Orange", "Apple"]
console.log(fruits.toString())
console.log(fruits.join(" - "))
fruits.pop() //ลบข้อมูลตัวสุดท้าย
console.log(fruits)
fruits.push("kiwi") //เพิ่มข้อมูล ท้ายสุด
console.log(fruits)
fruits.shift() //ลบข้อมูลตัวแรก
console.log(fruits)
fruits.unshift("lemon") //เพิ่มข้อมูลด้านหน้า
console.log(fruits)
fruits[0] = "mango" //แทนที่ข้อมูลใหม่
console.log(fruits)
//delete fruits[0] //ลบข้อมูลที่ index ไหน แต่ length เท่าเดิม

//============== array splice (เพิ่มและลบข้อมูล) =====================
console.log("======== array splice (เพิ่มและลบข้อมูล)==============")
fruits.splice(2, 0, "add1", "add2") //เพิ่มกี่ตัว , ลบกี่ตัว , เพิ่มอะไรบ้าง
console.log(fruits)
fruits.splice(0,1) //ลบ 1 ตัวจากตำแหน่งแรก
console.log(fruits)

//============== array slice =================================
console.log("======== array slice(ตัด array ไป สร้าง Array ใหม่) ====")
//การรวม Array
var arr1 = ["value1", "value2"]
var arr2 = ["value3", "value4", "value5"]
var arr3 = ["value6", "value7"]
var concatArr = arr1.concat(arr2,arr3)
console.log(concatArr)

//การตัด array ไปสร้าง array ใหม่ slice
var sliceArr = ["slice0", "slice1", "slice2", "slice3", "slice4","slice5"]
var newArrSlice = sliceArr.slice(2,5) //(a,b) ตั้งแต่ index a ถึง b(ไม่เอาb)
console.log(newArrSlice)

//============== Datatype 7 ===============================
//Primative Type ชนิดข้อมูลเก็บได้ตัวเดียว
 var myNum = 10; //Number
 var myString = "Name"; //String
 var myTrue = true; // Boolean
 var myFalse = false; // Boolean
 var myNull = null; //Null
 var myUndefined; // Undefined
//Object Type เก็บค่าได้หลายตัว
 var myObject = {}; //Object

 //============== typeof ไว้เช็คชนิดตัวแปร ====================
console.log(typeof myString)

//================JavaScripts Math Object ================
console.log("============= Math Object =======================")
console.log(Math.PI)
console.log(Math.round(4.5)) //.5ปักขึ้น .4ปัดลง
console.log(Math.pow(4,2)) //ยกกำลัง
console.log(Math.sqrt(64)) //สแควรูท
console.log(Math.abs(-4.5)) //แปลงให้เป็นจำนวนเต็ม
console.log(Math.ceil(4.1)) //ปันขึ้นหมด
console.log(Math.floor(4.6)) //ปักลง
console.log(Math.random()) //random 0-1

//=============== if else ==============================
console.log("========== if else =================")
var time = 10
if(time < 12) {
    console.log("good morning")
}else {
    console.log("goog affternoon");
}

//====================== switch case ======================
console.log("========== switch case =================")
switch(new Date().getDay()){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
}

//================= for loop =============================
console.log("============ for loop ================")
var carsLoop = ["BMW", "Ford", "Honda"]
for(var i = 0; i < carsLoop.length;i++){
    console.log(carsLoop[i])
}

//=========== for in loop ===================================
console.log("============ for in loop ================")
console.log("========== loop properties ของ obj======")
var personIn = {
    fname: "fname",
    lname: "lname",
    age: 21
}
var print =""
for(var x in personIn){
    print = print + personIn[x] + " "
    console.log(personIn[x])
}
console.log(print)

//=========== for of loop ===============================================
console.log("============ for of loop ================")
var carsOf = ["BMW", "Ford", "Honda"]
var x;
for (x of carsOf) {
    console.log(x)
}
var myStr = "JavaScript"
var y;
for (y of myStr) {
    //console.log(y)
}


//============= type conversions =========================================
console.log("============ type conversions แปลงชนิดข้อมูล ======")
var myNum1 = "123"
var convers = Number(myNum1)
var convers1 = parseInt(myNum1) //แปลงสตริงเป็น number
console.log(convers1)
console.log(typeof convers1)

//============ scope JavaScript ==========================================
 console.log("============== scope =============");
 var myCars = "bmw" //global

 function myFunc(){
    nameChay = "chayyyy"; //auto global //ถ้าใส่ var local
    console.log(myCars)
 }

myFunc();
console.log(nameChay); 

//========== JavaScript Hoisting ===============================================
console.log("========== JavaScript Hoisting =======")
//เวลาที่เราประกาศตัวแปร มันจะทำการย้ายตัวแปรไปด้านบนสุดของ scope 
z = 7 
console.log(z) //ถูกใช้ก่อนประกาศได้
var z; //ประกาศทีหลัง declaration ประกาศเฉยๆจะถูกย้ายไปด้านบน
console.log(s) 
var s = 10 // innitialization ไม่ถูกย้ายไปด้านบนเพราะมีการกำหนดค่า

//========== JavaScript Strict mode ============================================
console.log("========== JavaScript Strict mode =======")
//เพิ่ม "use strict" จะมีการจับข้อผิดพลาดตลอด


//========== this keyword =======================================================
console.log("============== this keyword ==========");
//console.log(this)


//========== Es6 let const =======================================================
console.log("============== Es6 let const ==========");
//var 
var var1 = 5;
var var1 = 6;
console.log(var1)
//let
let let1 = 7;
let1 = 8; //เปลี่ยนแปลงค่าโดยไม่ต้องประกาศใหม่
console.log(let1)
//const
const const1 = 10;
//const1 = 11; //เปลี่ยนแปลงไม่ได้
console.log(const1)


//==================== scope var let const ==========
console.log("======= scope var let const ==============");
//let const ทำงานภายใน scope เท่านั้น
//var เรียกใช้นอก scope ได้
var testScope = 10
{
    var testScope = 5;
}
console.log(testScope);

//================= template String =========================
console.log("== template String การแสดงผลตัวแปรพร้อม string =====");
let tempStr = 999;
console.log(`price : ${tempStr}`)


//============= Arrow Function ============================
console.log("======= Arrow Function ===========================");
//function Expression
var helloArrow1 = () => "helloArrow"
console.log(helloArrow1());

//function Declaration
var helloArrow2 = (parameters) =>{
    return console.log(`test : ${parameters}`);
}
helloArrow2("yeh ")

//======================= Class ===========================
console.log("================ Class =======================");
class myClass {
    constructor(name){
        //ทำงานทันทีที่เรียกใช้ 
        this.myname = name;
    }

    fullname(greeting){
        return greeting + " My name is " + this.myname
    }

    static hello(test){
        return "static " + test 
    }
}

var testClass = new myClass("Chay"); //เรียกใช้ class กลายเป็น Obj
console.log(testClass.fullname("Hello"));
console.log(myClass.hello("test")); //static ใช้ชื่อ class เรียกเท่านั้น


//=================== class inheritance =====================
console.log("============== class inheritance ===========");
class Car {
    constructor(brand){
        this.carname = brand;
    }

    present(){
        return "I have a " + this.carname
    }
}

class Model extends Car {
    constructor(brand, model){
        super(brand);
        this.model = model
    }

    show(){
        return this.present() + ", it's a " + this.model
    }
}

var myCarNew = new Model("Ford", "Mustang");
console.log(myCarNew.show());

//==================== JavaScript style Guide ========
//การเขียน ex camelcase
//var i
//for(i = 0; i< 9: i++)
//คำสงวน

//=====การเรียก API ในภาษา JavaScript=======
console.log("====== การเรียก API ในภาษา JavaScript ======");
// https://jsonplaceholder.typecode.com/users

async function getUser() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    //console.log(response);
    let data = await response.json();
    return data;
}
//getUser().then(data => console.log(data))

var objApi = []
let apiUrl = "https://jsonplaceholder.typicode.com/users"

function getApi(){
    axios.get(apiUrl)
    .then(function(response){
        data = response.data 
        //console.log(data[0].name);
        for(var i=0;i < data.length ; i++){
            objApi.push(data[i].name)[i]
        }
       
    }).catch(error =>{
        console.log(error);
    })
}
getApi()
console.log(objApi);
