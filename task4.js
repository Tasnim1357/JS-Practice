function canpay(a,t){
    if(Array.isArray(a) && a.length==0){
        return 'please insert in the array';
    }
    let s=0;
    for(let i of a){
        s=s+i;
    }
    if(s>=t){
        return true;
    }
    else{
        return false;
    }
}

const a=[1,5,5];
const n=10;
const d=canpay(a,n);
console.log(d);