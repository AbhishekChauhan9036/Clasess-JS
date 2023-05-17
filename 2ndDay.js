//Find max elemet in the array
function Solve(arr) {
    let temp = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > temp) {
            temp = arr[i];
        }
    }
    return temp;
}


const brr = [10, 200, 51, 90, 540, 89, 32];
let ans = Solve(brr);
console.log(ans);
