function loadPage() {
    var selectBox = document.getElementById("pageSelect");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    // Redirect to the selected page
    switch (selectedValue) {
        case "page1":
            window.location.href = "../hello.html";
            break;
        case "page2":
            window.location.href = "../page2.html";
            break;
        case "page3":
            window.location.href = "../page3.html";
            break;
        default:
            // Handle error or default case
            console.error("Page not found.");
    }
}






