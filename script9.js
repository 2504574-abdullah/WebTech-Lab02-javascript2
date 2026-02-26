let counter = sessionStorage.getItem("reloadCounter");

        if (counter === null) {
            counter = 0;
        }

        counter = parseInt(counter) + 1;

        sessionStorage.setItem("reloadCounter", counter);

        document.getElementById("counterDisplay").innerText =
            "Page Reload Count: " + counter;