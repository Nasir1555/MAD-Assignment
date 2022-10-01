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
