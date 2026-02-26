const promise1 = new Promise(function (resolve) 
{
    setTimeout(function () 
    {
        resolve("Resolved after 1 second");
    }, 1000);
});

const promise2 = new Promise(function (resolve) 
{
    setTimeout(function () 
    {
        resolve("Resolved after 3 seconds");
    }, 3000);
});

Promise.race([promise1, promise2])
    .then(function (result) 
    {
        console.log("Winner Promise:", result);
    });