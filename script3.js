function getProductIDs() 
{
    return new Promise(function (resolve) 
    {
        setTimeout(function () 
        {
            console.log("Fetching product IDs...");
            resolve([101, 102, 103]);
        }, 2000);
    });
}
function getProductDetails(productID) 
{
    return new Promise(function (resolve) 
    {
        setTimeout(function () 
        {
            console.log("Fetching details for product ID:", productID);
            resolve
            ({
                id: productID,
                name: "Laptop",
                price: 75000
            });
        }, 2000);
    });
}
getProductIDs()
    .then(function (ids) 
    {
        console.log("Product IDs:", ids);
        return getProductDetails(ids[0]);
    })
    .then(function (product)
    {
        console.log("Product Details:", product);
    })
    .catch(function (error) 
    {
        console.log(error);
    });