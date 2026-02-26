function downloadImage(success) 
{
    return new Promise(function (resolve, reject) 
    {
        console.log("Downloading image...");
        setTimeout(function () 
        {
            if (success) 
            {
                resolve("Image downloaded successfully: https://en.wikipedia.org/wiki/Air_University_Pakistan");
            } else 
            {
                reject("Error: Image download failed!");
            }
        }, 2000);
    });
}
downloadImage(true)
    .then(function (result) 
    {
        console.log(result);
    })
    .catch(function (error) 
    {
        console.log(error);
    });