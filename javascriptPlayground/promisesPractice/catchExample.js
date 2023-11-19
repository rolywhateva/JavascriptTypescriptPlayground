const testPromise = (value)=> {
    return new Promise((resolve,reject)=>{
        if(value%2==0) {
            resolve(value);
        } else {
            reject(value);
        }
    });
}

const promise = testPromise(11);

promise.then(res=>{
    console.log(res);
    return res*2;
}).catch((ex)=>{
   console.log(ex);
   return ex/2.0;
}).then((data)=>{
    console.log(data);
});