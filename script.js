function openMaps() {
    let address = document.getElementById("address").innerText;
    let url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, "_blank");
}
