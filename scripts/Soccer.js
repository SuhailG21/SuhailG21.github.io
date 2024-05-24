var namesList = [];
var inputContainer = document.getElementById("inputContainer");
var tablesContainer = document.getElementById("tablesContainer");

inputContainer.classList.add("show");
tablesContainer.classList.add("show");

function addName() {
    var nameInput = document.getElementById("nameInput");
    var name = nameInput.value.trim();
    if (name !== "") {
        namesList.push(name);
        updateNamesTable();
        nameInput.value = ""; // Clear input field after adding name
    }
}

function updateNamesTable() {
    var namesTable = document.getElementById("namesTable").getElementsByTagName('tbody')[0];
    namesTable.innerHTML = ""; // Clear the table first
    namesList.forEach(name => {
        var newRow = namesTable.insertRow();
        var cell = newRow.insertCell();
        cell.appendChild(document.createTextNode(name));
    });
}

function randomizeTeams() {
    var team1 = [];
    var team2 = [];

    // Shuffle names array
    for (var i = namesList.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [namesList[i], namesList[j]] = [namesList[j], namesList[i]];
    }

    // Split names into two teams
    for (var i = 0; i < namesList.length; i++) {
        if (i % 2 === 0) {
            team1.push(namesList[i]);
        } else {
            team2.push(namesList[i]);
        }
    }

    // Display teams
    var teamsTable = document.getElementById("teamsTable").getElementsByTagName('tbody')[0];
    teamsTable.innerHTML = "";
    var maxLength = Math.max(team1.length, team2.length);
    for (var i = 0; i < maxLength; i++) {
        var row = teamsTable.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        cell1.appendChild(document.createTextNode(team1[i] || ""));
        cell2.appendChild(document.createTextNode(team2[i] || ""));
    }
}

function resetTables() {
    namesList = [];
    updateNamesTable();
    var teamsTable = document.getElementById("teamsTable").getElementsByTagName('tbody')[0];
    teamsTable.innerHTML = "";
}