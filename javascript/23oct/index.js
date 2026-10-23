// let arr = [1,2,3,4,5]
// for(let i in arr){
//     // index print hoga in main
//     console.log(i);  
// }
// for(let i of arr){
//     // value print hoga of main
//     console.log(i);  
// }

// let num = prompt();
// // odd even find
// if(num%2==0){
//     console.log(even);
    
// }
// else{
//     console.log(odd);
    
// }

//         //  console.log(num);





let n = 5;

for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// for (let i = n; i >= 1; i--) {
//     let row = " ";
//     for (let j = 1; j <= i; j++) {
//         row += "* ";
//     }
//     console.log(row);
// }

for (let i = 1; i <= n; i++) {
    let star = ' ';
    for (let j = 1; j <= n - i + 1; j++) {
        star += "* ";
    }
    console.log(star);
}


       