async function loadIP() {
    const ipBox = document.getElementById("ip");
    ipBox.textContent = "Loading...";

    try {
        const response = await fetch(
            "https://www.cloudflare.com/cdn-cgi/trace",
            { cache: "no-store" }
        );

        const text = await response.text();
        const ip = text.match(/ip=(.*)/)[1].trim();
        ipBox.textContent = ip;

    } catch (error) {
        ipBox.textContent = "Failed to load IP (network blocked)";
    }
}

loadIP();
