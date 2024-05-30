function loadPage() {
    var selectBox = document.getElementById("pageSelect");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    // Redirect to the selected page
    switch (selectedValue) {
        case "page1":
            window.location.href = "../Forms/Personal.html";
            break;
        case "page2":
            window.location.href = "../Forms/NSFAS.html";
            break;
        case "page3":
            window.location.href = "../Forms/CryptoGPT.html";
            break;
        default:
            // Handle error or default case
            console.error("Page not found.");
    }
}






