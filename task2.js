function sortmaker(a){
  const n=[];
   if(a.includes(0)){
    a.sort(function(a, b){return a - b});
        return a;
   }
  for(let i=0; i<a.length;i++){
    if(a[i] <0 || a[i+1]<0){
        
      return 'invalid input';

    }

    else if(a[i]==a[i+1]){
        return 'equal';
    }

    
  

    else if(a[i]>0){
        
        n.push(a[i]);
        n.sort(function(a, b){return a - b});
       n.reverse();
        

    }
  
}
return n;


}

const a1=[200,10,20,30];
const b=sortmaker(a1);
console.log(b);



let sortString = (stringg) => {
    stringg.split("").sort().join("");
	return stringg;
};

console.log("Sorted String: ");
console.log(sortString("qwertyuiop"));
