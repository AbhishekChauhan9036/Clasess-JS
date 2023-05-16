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





//Search a element and return index of the element
function Solve(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}


// const arr = [12, "apple", 12.098, "wood", "Mohan", true, false];r
const brr = [10, 20, 51, 90, 54, 89, 32];
const target = 42;
let ans = Solve(brr, target);
console.log(ans);

/* HomeWork
Find max elemet in the array
Find min elemt in the array */ 
