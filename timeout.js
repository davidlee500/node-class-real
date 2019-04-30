
function timeout(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(); 
        },ms);
    });
}

timeout(1000).then((milliseconds)=>{
    console.log(`Waited ${milliseconds} ms`);
}).catch((milliseconds)=>{
    console.log(`Rejected: ${milliseconds}`);
});
