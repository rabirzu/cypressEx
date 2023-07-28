
function sum (...items){
  
  if(items.length===1 &&Array.isArray(items[0]))
        items=[...items[0]];

    return  items.reduce((a,b)=>a+b);

}

//circle

const  circle = {
    radius:1,
    get area(){
        return Math.PI *this.radius*this.radius;
    }
}
console.log(circle.area)

//error
try{
const numbers =[1,2,3,4];

const count=countOcurrences(null,1);
console.log(count);
}
catch(e){
    console.log(e.message)
}

function countOcurrences(array,searchElement){
    if(!Array.isArray(array))
    throw new Error ('invalid array.');

    return array.reduce((accumulator, current) => {
      const ocurrence = current === searchEelement ? 1 : 0;
      return accumulator + occurance;
    },0);}
