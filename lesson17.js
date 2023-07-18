// const fakeRequestCallback = (url, success, failure) =>{
//     const delay = Math.floor(Math.random() * 4500) +500;
//     setTimeout(()=>{
//         if(delay > 4000){
//             failure("Connection Timeout: ");

//         }else{
//             success("Here is your fake data from "+ url);
//         }
//     },delay);
// }

// fakeRequestCallBack(
//     "books/page1",
//     function(response){
//         console.log("IT WORKED");
//         console.log(response);
//     },
//     function (err){
//         console.log("ERROR");
//         console.log(err);
//     }
// );

//Nested callbacks​

//Change the code to the following:​

// fakeRequestCallback(​"books/page1",​function (response) {​
//     console.log("IT WORKED");​
//     console.log(response);​
// fakeRequestCallback(​
// "books/page2",​
// function (response) {​
// console.log("IT WORKED AGAIN!!!");​
// console.log(response);​
// },​
// function (err) {​
// console.log("ERROR ON 2ND REQUEST");​
// }​
// );​
// },​
// function (err) {​
// console.log("ERROR");​

// console.log(err);​

// }​

// );

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) =>{
        const daily = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
           if(dealy> 4000){
            reject ("Connection timeout: ");
           } 
           else{
            resolve ("Here is your fake data from "+url);
           }
        }, delay);
    })
};
const result= fakeRequestPromise("fake/url");
console.log(result);
setTimeout(()=>{
    console.log(result);
},5000);