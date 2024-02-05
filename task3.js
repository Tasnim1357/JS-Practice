function find(obj){
const st=obj.street;
const h=obj.House||'__';
const s=obj.Society||'__';
const str=st+","+h+","+s;
return str;
}

const d=find({street:10,Society:"Earth Perfect"})
console.log(d);