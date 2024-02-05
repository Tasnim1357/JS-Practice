function match(a1,b1){
if(a1.includes(b1)){
    return true;
}
else{
    return false;
}
}
const a="Peter Parker ";
const b="Peter ParKeR";
const c=match(a,b);
console.log(c);



// includes ar match method er moddhe j array ba string thakbe tar full match korle e result true hobe


// function match(a1,b1){
//     if(a1.match(b1)){
//         return true;
//     }
//     else{
//         return false;
//     }
//     }
//     const a="John Doe is";
//     const b="dohn doe";
//     const c=match(a,b);
//     console.log(c);