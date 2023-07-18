 let color;

 function displayColor(newColor, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            color= newColor;
            console.log(color);
            resolve();
        },delay)
    })
 }
//  displayColor("blue",1000).then(()=>{
//     displayColor("green",1000).then(()=>{
//         return displayColor("back",1000)
//     })
//  });

async function rainbow(){
    await displayColor("back",1000);
    console.log("this shows after black");
    await displayColor("red",1000);
    console.log("this shows after red");
    await displayColor("yellow",1000);
}
rainbow().then(()=>{
    console.log("colors have been shown")
});
