function loadIP() {
    const output = document.getElementById("output");
    output.innerText = "Loading...";

    fetch("https://api.ip.sb/jsonip")
        .then(res => res.json())
        .then(data => {
            output.innerText = "Your IPv4: " + data.ip;
        })
        .catch(err => {
            output.innerText = "Failed to load IP:\n" + err;
        });
}
