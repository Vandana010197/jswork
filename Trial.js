//alert("Bye");
document.getElementById("h").innerHTML="Vandana";
 console.log("Hi");

 
//  var a;
//  a=5;
//  var z=4;
//  c=a+z;
//  alert(c); 
//  console.log(c);

let IsLogin=1;
/*
if(IsLogin==0){
    document.write("Login");
}
else{
    document.write("Logout");
}

-----------------OR----------------*/

//use of ternary operator:---------------

let option=IsLogin==1? "Logout":"Login";
//condion--------------- true----- false
document.write(option);

// Nulless_____operator  ---when variable is null or undefined  then use this operator

let user;
alert(user?? "Guest User");


//Q:1  if input =1,"y","yes" output=continue....
//     if input=0, "n","no"  output=End...

/*let input="yes";

if(input===1 || input==="y"|| input==="yes"){
    document.write("Continue");
}else if(input===0 || input==="n"|| input==="no"){
    document.write("End");
}else{
    document.write("Wrong Input");
}*/
//----------------------OR--------------------------------------
//switch satement only work in strict comparision with "==="

document.write("<br>");
let input=8;

/*switch(input)
{
case 1: 
    document.write("Continue");
    break;
case "y": 
    document.write("Continue");
    break;
case "yes": 
    document.write("Continue");
    break;
case 0:
    document.write("End");
    break;
case "n":
    document.write("End");
    break;
case "no":
    document.write("End");
    break;
default:
    document.write("wrong input");
}
---------------------------------OR------------------------------*/

/*
switch(input){
case 1:
case "y":
case "yes":
    document.write("Continue....");
    break;
case 0:
case "n":
case "no":
    document.write("Continue...");
    break;
default :
    document.write("........Wrong Input....");
}*/

//in break loop is end for that statement not execute next---------
for(let i=1; i<10;i++){

    if(i==5){
        break;
    }
    document.write(i);
    document.write("<br>"); 
}

//continue work for a particular statement loop not working------like only for 5 
for(let i=1; i<10;i++){

    if(i==5){
        continue;
    }
    document.write(i);
    document.write("<br>"); 
}

outer:for(let i=1;i<10;i++){
    
    document.write(i);
    document.write("<br>");
    for(let j=1;j<3;j++){
        
        if(i==2){
            break outer;
        }
        //document.write(j);
        document.write("Hello");
        document.write("<br>");
    }
}

//     # for interacting with user use (prompt , confirm  and  alert)--------------------------

/*let age=prompt("Enter your age");
if(age!=null){
    //document.write('Your age is'+ age);
    document.write(`Your Age is ${age}`);
}else{
    document.write("Enter your age");
}*/

/*let res=confirm("Are you sure");
if(res){
    document.write("Deleted");
}else{
    document.write("not deleted");
}*/

// TYPEOF--------------------------------

/*let text="ghj";
document.write("<br>");
document.write(typeof text);*/

//let a=5+null;
/*
let a="5"+2;
document.write("<br> "+" ");
document.write(typeof a);
document.write(" "+a);

let b="5"-2;
document.write(" <br> "+" ");
document.write(typeof b);
document.write(" "+b);
*/

//TYPE CONVERSION  ----OR---------------------TYPE CASTING----------------
//convert number to string---------
let z=4;
document.write("<br>");
let new_z=String(z);
document.write(typeof new_z);

//convert string to number-----------
let txt="43";
let newtxt=Number(txt);
document.write("<br>");
document.write(typeof newtxt);

let num=0;
let newnum=Boolean(num);
document.write("<br>");
document.write(typeof newnum);
document.write("<br>");
document.write(newnum); //output false only for 0 otherwise true for any number...blank string also false otherwise any string content true return

//STRING -------------------------------
let sentence= "\n Vandana \\ kumari\n";
let copy="Hello\nbye"
document.write(sentence);
document.write(copy);
document.write(copy.length);

//in console use enter, tap and space -------------
let v="Vandana\nKumari\n";
let van=`Hello
How are you?
Are you Ok?`
console.log(v);
console.log(van);

console.log(van[4]);
console.log(van.length);

//STRING MANIPULATION----------------------------
/*
let str1="vandana";
let str2="Maurya";
let str3=str1.concat(" ",str2);
console.log(str3);*/

//extract substring----------------------------

let str="Hello Riya . How are you?";
let substr=str.substr(6,4); //(position, length)
//also use "substring" function(6,9)
//for extracting use function "substr(starting index no. (like 6), length of string that you want to extract(Like 4characters) )"
console.log(substr);
let sub=str.substring(6,10);
console.log(sub);

let abc="Hello Students. What are you doing?";

let position = abc.indexOf('What');
console.log(position);
//if -1 present at indexOf then that word is not present in that topic whose we want to search.

//for remove white space in content...............use trim function.
let trimedstr=abc.trim(); //  other functions ------   trimStart() , trimEnd()
console.log(abc);
console.log(trimedstr);


let upper=abc.toUpperCase(); //for Capitalized string
console.log(upper);

let lower=abc.toLowerCase(); //for change in lower case.
console.log(lower);

let R=abc.replace("Students","Guys"); //replace function use for ---- Students replace by Guys.
console.log(R);

//check in string "Students " present in string or not  use------------includes()--- function
let In=abc.includes("Students"); //if present then return --true--- otherwise --false-----
console.log(In);

//----------------------------------ARRAY--------------------------
//declare array by two types----
let book=["math","physics","computer"];
//   OR------------>   let book=new Array("math","physics","computer");
console.log(book[2]);
/*
book.push("English"); //add something in array at last
book.unshift("Bio"); //add at first

book.pop(); //remove from end
book.shift(); //remove from first
console.log(book);
*/


let newbook=book.splice(1,2);//remove from mid (position,elments 2,3etc)
console.log(newbook);

//if you want array will empty use this
//book.length=0;           ----OR-----
//book=[];


//------for know the position------------------
let Book=["Math","Science","Hindi","physics"];
let pos = Book.indexOf("physics");
console.log(pos);

//for knowing any variable is string or array use this function-------------------
let str5=["math"];
console.log(Array.isArray(str5));  //if true then -->Array ---otherwise---->  string


let text="hell friends What's up?"
/*
let wordarray=text.split(" "); //split by space or any word
console.log(wordarray);
*/

let wordarray=Book.join("_"); //use for space or , etc after each word
console.log(wordarray);

//How to add two arrays----------------------------------------------

let b1=["H","E","M"];
let b2=["D","S"];
let b4=["F"]
let b3=b1.concat(b2,b4);
console.log(b3);

//Multi-Dimentional Array  OR  (Array stored array)----------
let bwp=[["H","30"],["E","25"],["M","30"]];
//console.log(bwp[1][0]);
/*for(let i=0;i<bwp.length;i++){
    console.log(`Element ${i} is ${bwp[i]}\n`);
}*/

//how to find(Acess) any Array elements------> "Iterate"-----------------

let E=["a","b","c"];
E.forEach(MyFun);
function MyFun(value){
    console.log(value);
}














































































































