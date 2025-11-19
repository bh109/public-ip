async function loadIP() {
    const ipBox = document.getElementById("ip");
    ipBox.textContent = "Loading...";

    try {
        // ipify has no cache problem
        const response = await fetch("https://api64.ipify.org?format=json&nocache=" + Math.random(), {
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
