 let color;
// setTimeout(()=>{
//     color = "blue";
//     console.log(color);
//     setTimeout(()=>{
//         color = "green";
//         console.log(color)
//     },1000);
// },1000);



function displayColor(newColor,delay,doNext){
    setTimeout(()=>{
         color = newColor;
        console.log(color);
        doNext && doNext();
    },delay);
}

displayColor("blue",1000,() => displayColor("green",1000));