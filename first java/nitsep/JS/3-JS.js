    document.getElementById("btn").onclick = function(){

        document.getElementById("text").innerHTML = "Welcome to first javaScript Course"
    };

    document.getElementById("secondButton").onclick = function(){
        document.getElementById("secondParagraph").innerHTML  = "yes really ...." +
         document.getElementById("secondParagraph").innerHTML  + " and JS is real programmimg lang"
    };



    document.getElementById("signInButton").onclick =function(){

        document.getElementById("empty").innerHTML = "Sign In Sucessfully"

    };

    document.getElementById("thirdButton").onclick = function(){
        document.getElementById("text2").innerHTML = "Thank you for changing my color";
        document.getElementById("text2").style.backgroundColor="red";
        document.getElementById("text2").style.fontSize="40px";
        document.getElementById("text2").style.color="white";
    };

    document.getElementById("reset").onclick = function(){
        document.getElementById("clearParagraph").style.display = "none";
    };

    document.getElementById("red-circle").onclick= function(){
        document.getElementById("red-circle").style.display="none";
    };


    document.getElementById("yellow-circle").onclick= function(){
        document.getElementById("yellow-circle").style.display="none";
    };



    document.getElementById("green-circle").onclick= function(){
        document.getElementById("green-circle").style.display="none";
    };

    document.getElementById("login-btn").onclick = function(){

        var textEntered = "";
        textEntered = document.getElementById("UserName").value;
        document.getElementById("text3").innerHTML = textEntered;
    };


    document.getElementById("submitBtn").onclick = function (){
        var x = "";
        x = document.getElementById("inputvalue").value;
        document.getElementById("paragraphId").innerHTML = "user name correct";


    };


document.getElementById("enterBtn").onclick = function (){
    var danialphonenumber = "";
    danialphonenumber = document.getElementById("inputcalue2").value;
    document.getElementById("phoneNumber").innerHTML = "Danial phone number is valid";
};



//aray
var array = [10,20,30,40,50,60,70,80,90,100];

document.write(array[2])



//if else

document.getElementById("btn2").onclick = function(){

    var guessAnswere = "javascript" ; 

    var enteredValue = 
    document.getElementById("inputValue3").value;


    if (guessAnswere==enteredValue) {
        alert("you win, you guess the right answere")
    } else {
        alert("please try again")
    }

};

//if else statement


document.getElementById("ageBtn").onclick = function(){
    var myAge = "29";
    var enterAge = document.getElementById("ageInput").value;


    if (myAge == enterAge) {
        alert("correct Guess | You Win   !!!")
        
    } else {
        alert("Wrong guess, Please try again")
    }

};

//if else statement

document.getElementById("btnStudent").onclick=function(){
    var correctStudentAnswere = "50";
    var enteredStudentQuantity = document.getElementById("inputStudent").value;

    if (correctStudentAnswere == enteredStudentQuantity) {
        alert("you guess the correct student quantity")
        
    } else {
        alert("try again")
    }
};


//for loop

var progamingLang = ["c++","php","JS","SQL","Css","data"];
var programmingEmpty = "";
for (let i = 0; i < progamingLang.length; i++) {
    programmingEmpty = programmingEmpty + "<p>" + progamingLang[i]+"</p>"
    document.getElementById  ("programmingDiv").innerHTML = programmingEmpty; 
};



var mobileCompanies = ["Samsung","nokia","htc","vivo","iphone","nayatal"];
var emptyMobileCompanies = "";
for (let i = 0; i < mobileCompanies.length; i++) {
   emptyMobileCompanies = emptyMobileCompanies + "<p>" + mobileCompanies[i] +"</p>"
 
   document.getElementById("mobilecompaniesDiv").innerHTML =emptyMobileCompanies;
};




//while loop


var laptopCompanies = ["dell","toshiba","hp","apple","compaq","intel"];
var emptyLatopCompanies = "";
var i = 0;
while (i < laptopCompanies) {
    emptyLatopCompanies = emptyLatopCompanies +"<h4>"+ laptopCompanies[i]+"</p>";
    i++;
}
document.getElementById("mobilecompaniesDiv").innerHTML= emptyLatopCompanies;