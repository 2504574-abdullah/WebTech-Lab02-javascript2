function login() 
{
    return new Promise(function (resolve) 
    {
        setTimeout(function () 
        {
            resolve("User logged in successfully.");
        }, 1000);
    });
}
function getProfile() 
{
    return new Promise(function (resolve, reject) 
    {
        setTimeout(function () 
        {
            reject("Network Error: Unable to fetch profile.");
        }, 1000);
    });
}
login()
    .then(function (msg) 
    {
        console.log(msg);
        return getProfile();
    })
    .then(function (profile) 
    {
        console.log(profile);
    })
    .catch(function (error) 
    {
        console.log("Error caught:", error);
    });