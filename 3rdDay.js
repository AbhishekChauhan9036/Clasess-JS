https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/

// Swap two Number 
let a=10;
let b=20;
let temp=a;
a=b;
b=temp;
console.log(a,b);



let x=10;
let y=20;
[[x,y]=[y,x]]
console.log(x,y);



let m=10;
let n=20;
m=m+n;// 10+20
n=m-n;// 30-20
m=m-n;//30-10
console.log(m,n);



let q=10;
let r=20;
q=q^r;
r=q^r;
q=q^r;
console.log(q,r);









/**
1929. Concatenation of Array
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    
    const ans=new Array(nums.length*2);
    for(let i=0;i<nums.length;i++){
        ans[i] = nums[i];
        ans[i+nums.length] = nums[i];
    }
    return ans;
};


