async function loadIP() {
    const ipBox = document.getElementById("ip");
    ipBox.textContent = "Loading...";

    try {
        const response = await fetch("https://www.cloudflare.com/cdn-cgi/trace", {
            cache: "no-store"
        });

        const text = await response.text();

        // Extract IP from "ip=1.2.3.4"
        const match = text.match(/ip=(.*)/);

        if (match && match[1]) {
            ipBox.textContent = match[1].trim();
        } else {
            ipBox.textContent = "Failed to parse IP";
        }

    } catch (err) {
        ipBox.textContent = "Failed to load IP";
    }
}

loadIP();
