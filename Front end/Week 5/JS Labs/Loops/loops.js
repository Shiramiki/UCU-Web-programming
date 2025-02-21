//for loop
for (let i =1; i<= 5; i ++){
    console.log(i);
}

for (let i =1; i <=10; i++){
    if (i%2 === 0){
        console.log(i);
    }
}

//While loops
let j = 1;
while(j<=5){
   console.log(j);
   j++; 
}


// Do while
let k = 1;
do{
    console.log(k);
    k++
}while (k<=5);

//Breaking and continuing loops
for(let m =1; m<=10; m++){
    if(m===5){
        break;
    }
    console.log(m);
}

for(let n=1; n<=10; n++){
    if(n===5){
        continue;
    }
    console.log(n);
}

//nested loops 
for (let l=1;l<=3; l++){
    for (let q=1;q<=3;q++){
        console.log(`Row ${l}, Column ${q}`);
    }
}
