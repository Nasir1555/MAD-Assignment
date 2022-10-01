 /////////////problem:1
console.log("Probelm 1:");

let number= "23617";
let kth_num=4;
console.log("your Kth last digit is: ");
let b=0;
for( let i=number.length; i>=0; i--){
    
    if (b==5){
        console.log(number[i]);
        break;
    }
    else{
        b=b+1;
        continue;

    }
} 

   // // ////////problem:2
console.log("Problem 2 \n Sum of numbers");
let input = '23618';

let arr=[2,3,6,1,8];
let arr1=[];
for (let i=0; i<input.length; i++ ){
    arr1[i]=parseInt(input[i]);
}
console.log(arr1);
console.log(arr);
const initialValue = 2;
const sumWithInitial = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  
  console.log(sumWithInitial);

 /// //////////////problem :3
  console.log("Problem 3");
let inp = '23617';
let arr1=[];
for (let i=0; i<inp.length; i++ ){
    arr1[i]=parseInt(inp[i]);
}

let even= arr1.filter(a=>a%2==0);
let sum=arr1.map(v=>v=+arr1.filter(a=>a%2==0));
let n= even.reduce((prv, crv)=>prv+crv);
console.log(n);

console.log(sum.map(getsum));
function getsum(num){
    let a=0;
    return a=a+num;
}

//////problem:4


let num=[0,1,2,3,4,5,6,7,8,9,10];
console.log("square:");
let sqr=num.map(a=>a**2);
console.log(sqr);
console.log("Cube:");
let cube=num.map(a=>a**3);
console.log(cube);

////////problem :5

console.log("Probelm 5\n left-most vowel ");
function my_fucn(){
    let para="wrBTmshebaIAn";
    let vowel=['a','e','i','o','u'];
    let arr1=[];
    for (let i=0; i<para.length; i++ ){
        arr1[i]=para[i];
    }


    for (let i=0; i<=arr1.length; i++){

        for (let j=0; j<=vowel.length; j++){

            if (arr1[i]==vowel[j]){
                console.log(arr1[i],i);
                return;
            }
        }
    }
}

my_fucn()
console.log(" reverse order ");

    let number=[1,2,3,4,5,6];
    number.reverse();
        
        
console.log(number);

//////// problem:6
console.log("Problem 6");
let user_num=3;
let rand=Math.floor(Math.random()*10);
if (user_num==rand)
{
    console.log("You Win");
    console.log(rand,user_num);
}
else{
    console.log("Not Matched");
    console.log(rand,user_num);
}

////////problem :7
console.log("Problem 7");
let arr=[10,6,7,73,124,100];
console.log(arr.lastIndexOf(10)==arr.length-1 || arr.lastIndexOf(10)==0);

///////problem :8
console.log("Problem 8");
let str='comsats';
let arr1=Array.from(str);
console.log(arr1.sort().join(""));