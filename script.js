async function loadIP() {
    const ipBox = document.getElementById("ip");
    ipBox.textContent = "Loading IPv4...";

    try {
        const response = await fetch("https://ipv4.cloudflare.com/cdn-cgi/trace", {
            cache: "no-store"
        });

        const text = await response.text();
        const match = text.match(/ip=(.*)/);

        if (match && match[1]) {
            ipBox.textContent = match[1].trim();
        } else {
            ipBox.textContent = "Failed to parse IPv4";
        }

    } catch (err) {
        ipBox.textContent = "Failed to load IPv4";
    }
}

loadIP();
