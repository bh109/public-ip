function typeText(element, text, speed = 100) {
    element.innerHTML = "";
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

function loadIP() {
    const ipBox = document.getElementById("ip");
    typeText(ipBox, "Scanning network...");

    fetch("https://v4.ident.me", { cache: "no-store" })
        .then(res => res.text())
        .then(ip => {
            setTimeout(() => {
                typeText(ipBox, "IPv4 detected: " + ip.trim());
            }, 800);
        })
        .catch(err => {
            setTimeout(() => {
                typeText(ipBox, "Scan failed.");
            }, 800);
        });
}

