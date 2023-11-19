function job1() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> 
            resolve('result of job 1')
        , 1000);
    });
}

function job2() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>
            resolve('result of job 2')
        , 1000);
    });
}

var promise = job1();

promise.then(data1=> console.log('data1', data1) || job2())
.then(data2=> console.log('data2' ,data2)|| 'Hello world')
.then(data3=> console.log('data3',data3));


