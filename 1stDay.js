//function Definition
function SayHello(name) {
    return name;
}


var SayHello1 = function () {
    console.log("Hello Ram!");
}

//function Call
let Fname="Satish";
let Lname="Gupta";
let marks=String(123);
let t1=190.897;

let ans=Fname+marks;
console.log(typeof marks);
console.log(parseFloat(t1))
console.log(ans)





//  Revere a string
function reverseString(str) {
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        temp += str[str.length - i - 1];
    }
    return temp;
}

let Fname = "Satish";
let ans = reverseString(Fname);
console.log(ans);
