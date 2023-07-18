const fakeRequestPromise = (url)=>{
    return new Promise((resolve, reject)=>{
        const delay = Math.floor(Math.random() *4500)+500;
        setTimeout(() => {
            if(delay >350){
                reject("Connection Timout: ");
            }
            else{
                resolve("Here is your fake data from "+ url);
            }
        }, delay);
    })
}
async function makeTwoRequests(){
    try{
        let data1=await fakeRequestPromise("fake.url");
        console.log(data1);
    }
    catch(err){
        console.log("There has been an error");
        console.log("error is: "+err);
    }
    
    
}
makeTwoRequests();