const socket = new WebSocket("wss://echo.websocket.events");
        socket.onopen = function () 
        {
            console.log("Connected to WebSocket server.");
        };
        socket.onmessage = function (event) 
        {
            console.log("Server Response:", event.data);
        };
        function sendMessage() {
            const message = document.getElementById("messageInput").value;
            socket.send(message);
        }