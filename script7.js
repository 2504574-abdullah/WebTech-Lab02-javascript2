function login() 
{
    return new Promise(function (resolve) 
    {
        setTimeout(function () 
        {
            resolve("Login Successful");
        }, 1000);
    });
}
function getProfile() 
{
    return new Promise(function (resolve, reject) 
    {
        setTimeout(function () 
        {
            resolve("User Profile Data Retrieved");
        }, 1000);
    });
}
async function fetchUserData() 
{
    try 
    {
        const loginMsg = await login();
        console.log(loginMsg);

        const profileData = await getProfile();
        console.log(profileData);

    } catch (error) 
    {
        console.log("Error:", error);
    }
}
fetchUserData();