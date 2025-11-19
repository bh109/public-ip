async function loadIP() {
    const ipBox = document.getElementById("ip");
    ipBox.textContent = "Loading...";

    try {
        const response = await fetch("https://www.cloudflare.com/cdn-cgi/trace", {
            cache: "no-store"
        });

        const text = await response.text();

        // Extract "ip=xxx.xxx.xxx.xxx"
        const match = text.match(/ip=(.*)/);

        if (match) {
            ipBox.textContent = match[1].trim();
        } else {
            ipBox.textContent = "Failed to parse IP";
        }

    } catch (err) {
        ipBox.textContent = "Failed to load IP";
    }
}

loadIP();
