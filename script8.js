        const fileInput = document.getElementById("fileInput");
        fileInput.addEventListener("change", function (event) 
        {
            const file = event.target.files[0];
            if (!file) 
            {
                console.log("No file selected.");
                return;
            }
            const reader = new FileReader();
            reader.onload = function (e) 
            {
                console.log("File Content:");
                console.log(e.target.result);
            };
            reader.onerror = function () 
            {
                console.log("Error reading file.");
            };
            reader.readAsText(file);
        });