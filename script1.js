function sayHello(name, callback) 
{
    console.log("Preparing greeting message...");
    setTimeout(function () {
        const message = "Hello " + name + "!";
        callback(message);
    }, 3000);
}
function displayMessage(msg) 
{
    console.log("Message received:");
    console.log(msg);
}
sayHello("Ayesha", displayMessage);