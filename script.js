async function loadIP() {
    const ipBox = document.getElementById("ip");
    ipBox.textContent = "Loading...";

    try {
        const url = "https://api.ipify.org?format=json&nocache=" + Math.random();

        const response = await fetch(url, {
            cache: "no-store",
            headers: {
                "Cache-Control": "no-cache, no-store, max-age=0",
                "Pragma": "no-cache"
            }
        });

        const data = await response.json();
        ipBox.textContent = data.ip;

    } catch (error) {
        ipBox.textContent = "Failed to load IP";
    }
}

loadIP();
