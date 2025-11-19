function loadIP() {
    const output = document.getElementById("output");
    output.innerText = "Loading...";

    fetch("https://v4.ident.me", { cache: "no-store" })
        .then(res => res.text())
        .then(ip => {
            output.innerText = "Your IPv4: " + ip.trim();
        })
        .catch(err => {
            output.innerText = "Failed to load IPv4:\n" + err;
        });
}
