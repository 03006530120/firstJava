//alert ("this is danial first java");
let x ;
x = 3 ;
//let y = "Danial";

//objects
console.log()
let person = {
    firstName : "Danial",
    lastName :"Mian",
    age :"30",
    eyecolor :"black",
    student : true ,
    fullName: function () {
            
        alert(this.firstName + " " +this.lastName)
    },
    'Full Address' : "Faislabad Pakistan",
    cars:{
        car1:"bmw",
        car2 :"Honda",
        car3 : "Toyota"
    },
    meal: "rice",
    phone : "123456789",
    'mobile model' : { 
        'first mobile' : "Qmobile",
        'second mobile' : "samsung",
        'third mobile' : "iphone",
       
    },

};
//access with dot notation
console.log("person object age" + person.age )
//access with array method
console.log("person object First Name is" + person ["firstName"] )
console.log("person object full Address" + person ["Full Address"] )
//change obj values
person.age = " 24";
console.log("change object age is" + person ["age"] );
//new value added
person.favcol = "Black";
console.log("person fav col is " + person.favcol);
//delete the value
//delete person.lastName;
//console.log("person obj last name is " + person.lastName);

//nested obj access with dot notation
console.log("person object car2 is " + person.cars.car2);
//nested obj access with array metheod
console.log("person fvrt car3 is " + person.cars["car3"]);
//
console.log("nested person first mobile model is " + person["mobile model"]["first mobile"]);
//method access of an object alert first name and lastname
person.fullName();

//array
const customer = ["Dani", "tabi", "ali"];
const students = [];
students[0] = "Umar"; 
//access with index
let name1 = customer [2];
console.log("array name is" + " " + name1)
customer[2] = "manaan";
//ek array k andar diff type ky data type a sakty hain
const instrumentLab = [ 
    "ali", //string
     23, //numbers
      true, //bolean
      customer2 = { car1:"bmw", car2 : "honda"}, //object
      names = ["ismail", "smash", "jrw"] //nested array
]

//length property
const fruits = ["apple", "orange", "kiwi", "mango", "cherry"];
let count = fruits.length;
let firstFruit= fruits[0];
let lastFruit= fruits[4];
//firstelementarray camelcassing//now with complex way
let lastFruitComplex = fruits [fruits.length -1]
let lastFruitComplex1 = fruits [count -1 ]
console.log (lastFruitComplex);
console.log (lastFruitComplex1);
//let try now string to array
let stringarray= fruits.toString();
console.log ("The String Array is:" + stringarray );
//now let give space in array
let joinArray = fruits.join ("  ");
console.log(joinArray);
//now let try with a word in array
let joinArray1 = fruits.join(" danial ");
console.log(joinArray);
//pop method  - used for delete an last element in a array
fruits.pop();
//push method to add a element in the last of array
fruits.push("cheeku")
//shift method to remove an first element in a arrray
fruits.shift();
//unshift method to add at first index element use unshift


//delete method
//delete fruits[];

//concatination method
let newarr1 = [1,2,3,4,5]
let newarr2 = [6,7,8,9,10]
let merger = newarr1.concat(newarr2);
console.log(merger);


//flateing mathod
let flat1 = [1,2,3,[4,5],6,7,8,9,10]
//now trying with complex method
let complexFlat=[1, 2, [3, 4, [5, 6, [7, 8,],9, 10, ],11,12,],13,14]

let flatedArray = flat1.flat()


let complexFlatarray1 = complexFlat.flat();
let complexFlatarray2 = complexFlat.flat(2);
let complexFlatarray3 = complexFlat.flat(3);
console.log(complexFlatarray1)
console.log(complexFlatarray2)
console.log(complexFlatarray3)


//let try splice method  ek element ko delete kr k us ki koi nai elemnt add krny k liyea yea method use kia jata hai
let colony = ["asif" , "tower", "naizi"]
console.log("method use krny sy pehlay " + colony)
colony.splice(0,1,"mian",45)
console.log("method use krny k bad "+ colony)
//ab agr siraf ek element ko he delete krna ho to siraf colony.splice (0,1); chahy koi chez na add kro



//slice method
let sliceArray= [1,2,3,4,5,6,7,8]
let slicedArray= sliceArray.slice(3,6);
console.log(slicedArray)
//jitni index ko select kro gy yea slice method siraf utni index ko us mai sy slice ker k lay aye ga or iska yea rule hai l isko last jitni index do gy yea last sy pehly tak result lay k aye ga
//example 1,2,3,4,5,6,7,8,9
//          (3,6)
//to yea 6 index sy ek word pehlay ka result lay k aye ga yea 6 index ko nh lay k aye ga



//indexOf           (index ki location batae ga )
let indexmethod = [1,2,3,4,5,5,1,2,3,4]
console.log(indexmethod.indexOf(4,2));

//lastindex
let lastIndexMethod = [1,2,3,4,5,5,1,2,3,4]
console.log(lastIndexMethod.lastIndexOf(4));


//sort    yea alphabetic way kam krti hai like from A to Z
const names1=["danial", "fareya", "ali","hassam"]
console.log("before sort method " + names1)
names1.sort()
console.log("after sort method " + names1)


//tosorted 2023 yea apni orignal array change nh krti
const names2 = ["noman","adeel","mohsin","fareya"]
console.log("without tosorted " + names2)
const sortedArray = names2.toSorted();
console.log("after tosorted " +names2)
console.log("sorted array " + sortedArray)  

//reverse from last index to 0 , apni orignal array change kr lyti hai
console.log("before reverse "+ names2)
names2.reverse()
console.log("after reverse " + names2)
 
//numeri sort   Compare Funtion
const points = [45, 23, 12, 4, 1, 56, 100];
console.log("before sorted compare function " + points);
points.sort(
    function(a, b) {
        return a - b;
    }
);
console.log("after sorted compare function " + points);

//2nd numeric try
const points2 = [87,79,45,63,12,1,5,99,77,100];
console.log("before sort 2nd try  " + points2);
points2.sort(
    function(a,b){    
        return a -b;
        //for decending order we use 
        //return b-a;
    }
) ;
console.log("after 2nd try " + points2);
//min and max num method
console.log("min num " + points2[0] + "max num" + points2 [points2.length-1]);


//Arthmetic Operators
let add = 16+2; //sum
let subtract = 16-8; //subtract
let multiply = 3*3; //multiply
let division = 20/5; //division

let modulus = 25%5 // modulus (iska ans siraf wo ata hai jo reminder bachta hai)
let modulus2= 26%5 //

let exponent = 5**5 // power // 5 ki power 5

//increment and decrement operators
// ++ yea value mai 1 add kr daita hai
let age = 20;
console .log("before increment age" + age)
age++;
console.log("after increment age" + age)
// ans is 21

//decrement
//-- yea ans mai sy ek minus kr daita hai
age--;
console.log("after decrement age is " + age)
//now the answere is again 20 bcz usnay 21 pichlay ans sy 1 minus kr dia 


//prefix
let age1= 16;
console.log ("ages before predix increment " + age1)
let newage1 = ++age1; // 1 + age(16)
console.log("after prefix increment "+ age1)
console.log("newage 1 after prefix increment "+ newage1);


//postfix decrement

let age2 = 18;
console.log("before postfix decrement " + age2);
let newAge2= age2++; //  age (18) + 1
console.log ("after postfix decrement " + newAge2);
console.log ( "new age is " + newAge2);


//postfix second try 
let danialAge=28;
console.log("Danial age before postfix " + danialAge);
let newDanialAge = danialAge++; // age (18) + 1
console.log ("danial age after postfix " + newDanialAge);
console.log("Danial new age is " + newDanialAge);


//BOODMAS Rule 
//B-bracket first
//o- order i.e Power and square root etc
//DA- Division and multiplicator (left to right)
//AS= Additiona and subtraction (left to right)

// 5 + 2 * 3 / 3
let state = 5+2*3/3;
console.log ("5+2*3/3 = "+ state) 
//according to boodmas rule 
//is statement mai pehlay left sy daikho to pehlay multiply a rha hai to pehlay multiply ho ga
//2*3 =6
//phr divsion 
//2*3=6 / 3= 2
// last mai ab +, 2+5 =7 (the answere is correct)

//boodmas 2nd try 
let state1= 5+2*3-2/2;
console.log( "ans is : " + state1);


//Assighnment operator
let xx = 10 
let yy= 10
let z= xx-=yy  ;
console.log("answere of Z is: " + z )


//
//xx+=yy                            addition
//console.log("10 +10 : " + xx);
//xx-=yy;                           subtraction
//console.log("10 - 10 : " + xx);
//xx*=yy                            multiply
//console.log("10 * 10 : " + xx);
//xx/=yy                            division
//console.log("10 / 10 : " + xx);
//xx%=yy                            Mudolus
//console.log("10 % 10 : " + xx);
//xx**=yy                           power of x
//console.log(" 10 ** 10 : " + xx);






//comparision operators
let sum1= 5;
let sum2=6;
console.log("1 equal value " + (sum1==5) ); // is mai equal  & true false check kry ga 
console.log("2 equal value " + (sum1=="5") ); //is mai equal & true false & string  "datatype check nh krta"
console.log("3 equal value and equal type " + (sum1===5) ); // equal value & equal type 
console.log("4 equal value and equal type " + (sum1==="5") ); //equal value and equal data type b check key ga
console.log("5 not equal " + (sum1 !=5) );//Not equal to 
console.log("5 not equal " + (sum1 !=="5") );//Not equal to and data type 
console.log("greater than 5>1: " + (sum1 >1) ); //greater than   kya sum1(5) greater than "bhara" hai 1 sy , yes its true
console.log("less than 5<6 : " + (sum1 < 6) ); //less than
console.log("Less than and Equal to 5<=1 : " + (sum1 <=1) ); //Less than and equal to 
console.log("Less than and Equal to 5<=9 : " + (sum1 <=9) ); //Less than and equal to 
console.log("Greater than and Equal to 5>=1  : " + (sum1 >=1) ); //Less than and equal to 
console.log("Greater than and Equal to  5>=9 : " + (sum1 >=9) ); //Less than and equal to 

console.log("Greater than and Equal to  5>=5 : " + (sum1 >=5) ); //Less than and equal to 

//Logical operators "   && ,    ||  , !""


console.log("And operator  , answere : " + (sum1==5 && sum2== 6 ));  //dono ki values dono theak nh ho gi tb he yea true ans aye ga
console.log("And operator  , answere : " + (sum1==8 && sum2==6 )); 

console.log(" 0r operator , answere : " + (sum1==5 || sum2==9 )); //dono values mae sy ek value theak ho gi to yea true kr dy ga

console.log(" Not operator and answere : " + (sum1 !== sum2 )); // dono ek dusray k equal nh hain , yea hum usko bta rhy hain
console.log(" Not operator and answere : " + (sum1 !== sum2 )); // dono ek dusray k equal nh hain , yea hum usko bta rhy hain
console.log(" Not operator and answere : " + ( !(sum1==sum2) )); // secondway to write, dono ek dusray k equal nh hain , yea hum usko bta rhy hain

// Ternary Operators
let years = 17;
let message = (years < 18) ? "you are young" : "you are adult"
console.log(message)
 
let voltage = 400;
let Message = (voltage > 220) ? "Danger" : "Not Danger" ;
console.log(Message);

// Bitwise Operations 
//bitwise operation are considered more advanced and niche in JavaScript, for simplity wee will be ci=oncebtraring on Fundamental concepts
//For many web developers, bitwise operators are relivity insignificiant in day-to-day programming Task




//Conditional statements

//if condition and else if condition
weight =70
 if (weight < 70 ) {
    alert ("You are skinny")
 }
 
 else if (weight>70)
    alert("you are healthy")

 else {
    alert("case 3")
 }


 //switch code
 let grade= prompt()


switch (grade) {
    case "A":
        console.log("your grade is A : brilint " + grade );
        break;

        case "B":
            console.log("your grade is B: Good " + grade );
            break;

            case "C":
                console.log("your grade is C: Averge " + grade );
                break;

                case "D":
                    console.log("your grade is D : Bad " + grade );
                    break;

                    case "E":
                        console.log("your grade is E : Very Bad " + grade );
                        break;

                        case "F":
                            console.log("your grade is F: Fuck yourself " + grade );
                            break;

    default:
        console.log("Unknown grade")
        break;
}

//switch statement common cases


// 2 4 6 8 even num
// 1 3 5 7 9 odd num
// 1234567 natural
// 0123456 whole num 
//1 3 5 7 11 13  jo siraf khud pay divide ho sakty hon wo prime
// +/- 1, +/-2 integers
let xxx = 8;
let yyy = 3;

switch (xxx + yyy) {
    case 0:
        case 2:
            case 4:
                case 6:
                    case 8:
                        case 10 :
        console.log ("your number is even" )
        break;

        case 1:
            case 3 :
                case 5:
                    case 7:
                        case 9 :
                            case 11 :
                    console.log("your number is odd")

    default:
        console.log("case Three")
        break;
}

//for loop
let  loopx ;
for (loopx =20; loopx <=25; loopx++){
    console.log("iteration done and value of loop is now : " + loopx )
}

let jobExperience;
for (jobExperience=9; jobExperience<=11; jobExperience++){
    console.log("3rd try" + jobExperience)
}


//for of    loop
let student1= ['danial', 'ali', 'muneeb', 'jack'];
for ( let detail of student1){
    console.log(detail)
};

let students2=['tabi','danial','mohsin','yaseen'];
for (let display of students2){
    console.log(display)
};

//for in    loop

let students3 = {
    a : "waleed",
    b: "waqas",
    c:"mohsin"
}
for (let red in students3){
    console.log(students3[red])
};


let person3= {
    name : "danial",
    age : "29",
    country : "pak"
};
for (let key in person3) {
    console.log(key + ":"+person3[key])
};

//3rd try
let teacher = {
    FirstName : "Danial",
    LastName : "Mian",
    gender : "male",
    age : "29",
    cast : "arain"
}
for (let key in teacher){
    console.log(key + " : " + teacher[key])
};


//While loop
 //let i = 1;
 //while ( i<=1){
   // console.log(i)
 //}






