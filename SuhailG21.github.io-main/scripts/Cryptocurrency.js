function toggleEdit() {
    var profileContent = document.querySelector('.profile-content');
    var editForm = document.querySelector('.edit-profile-form');
    var editBtn = document.querySelector('.edit-btn');

    if (profileContent.style.display === 'none') {
        // Switching from editing mode to viewing mode
        profileContent.style.display = 'block';
        editForm.style.display = 'none';
        editBtn.textContent = 'Edit Profile';
        editBtn.style.backgroundColor = '#4CAF50'; // Set background color to green
    } else {
        // Switching from viewing mode to editing mode
        profileContent.style.display = 'none';
        editForm.style.display = 'block';
        editBtn.textContent = 'Cancel'; // Change button text to "Cancel"
        editBtn.style.backgroundColor = '#f44336'; // Set background color to red
        editBtn.style.display = 'none';
        populateEditForm();
    }
}

function populateEditForm() {
    var profileFields = document.querySelectorAll('.profile-content p');
    var editFormFields = document.querySelectorAll('.edit-profile-form input, .edit-profile-form select');

    profileFields.forEach(function(profileField, index) {
        if (index === 2) {
            // Gender field
            var genderSelect = document.getElementById('edit-gender');
            genderSelect.value = profileField.textContent;
        } else if (index === 3) {
            // Date of Birth field
            var dobField = document.getElementById('edit-dob');
            var dateParts = profileField.textContent.split(', ')[1].split(' ');
            var formattedDate = dateParts[2] + '-' + ('0' + (new Date(dateParts[0] + ' ' + dateParts[1] + ', ' + dateParts[2])).getMonth() + 1).slice(-2) + '-' + ('0' + dateParts[0]).slice(-2);
            dobField.value = formattedDate;
        } else if (index === 5) {
            // KYC Status field
            var kycStatus = profileField.textContent;
            var kycYesRadio = document.getElementById('edit-kyc-yes');
            var kycNoRadio = document.getElementById('edit-kyc-no');
            if (kycStatus === 'Yes') {
                kycYesRadio.checked = true;
            } else {
                kycNoRadio.checked = true;
            }
        } else {
            editFormFields[index].value = profileField.textContent;
        }
    });
}

function saveChanges() {
    var editName = document.getElementById('edit-name').value;
    var editSurname = document.getElementById('edit-surname').value;
    var editGender = document.getElementById('edit-gender').value;
    var editDOB = document.getElementById('edit-dob').value;
    var editAddress = document.getElementById('edit-address').value;
    var editKYC = document.querySelector('input[name="edit-kyc"]:checked').value;

    // Update profile fields
    document.getElementById('name').textContent = editName;
    document.getElementById('surname').textContent = editSurname;
    document.getElementById('gender').textContent = editGender;
    var dobParts = editDOB.split('-');
    var formattedDOB = new Date(dobParts[0], dobParts[1] - 1, dobParts[2]).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
    document.getElementById('dob').textContent = formattedDOB;
    document.getElementById('address').textContent = editAddress;
    document.getElementById('kyc').textContent = editKYC;

    // Hide edit form and show profile content
    toggleEdit();
}

//Alert that chat is not available
function startChat() {
    alert("Support chat is not available in this demo.");
}

//Trading panel
document.getElementById('buy-btn').addEventListener('click', function() {
    recordTrade('Buy');
});

document.getElementById('sell-btn').addEventListener('click', function() {
    recordTrade('Sell');
});

function recordTrade(type) {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    const date = new Date();
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();

    if (!amount) {
        document.getElementById('trade-message').innerText = 'Please enter an amount.';
        return;
    }

    const tradeEntry = document.createElement('div');
    tradeEntry.className = 'trade-entry';
    tradeEntry.innerHTML = `
        <strong>${type}</strong> 
        <span>${amount} ${currency}</span>
        <div>Date: ${dateString}</div>
        <div>Time: ${timeString}</div>
    `;

    document.getElementById('trade-list').appendChild(tradeEntry);

    // Clear input fields
    document.getElementById('amount').value = '';
    document.getElementById('currency').selectedIndex = 0;
    document.getElementById('trade-message').innerText = '';
}

//Trading view widget
// Initialize TradingView widget
var widget = new TradingView.widget(
    {
        "autosize": true,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "withdateranges": true,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "details": true,
        "container_id": "tv_chart_container"
    }
);

// Tab functionality
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.className += " active";
}

// Trade button functionality
document.getElementById("buy-btn").addEventListener("click", function () {
    executeTrade("Buy");
});
document.getElementById("sell-btn").addEventListener("click", function () {
    executeTrade("Sell");
});

function executeTrade(type) {
    var quantity = document.getElementById("quantity").value;
    var cryptocurrency = document.getElementById("cryptocurrency").value;
    if (!quantity || !cryptocurrency) {
        document.getElementById("trade-message").textContent = "Please enter both quantity and cryptocurrency.";
        return;
    }
    var tradeMessage = type + " " + quantity + " " + cryptocurrency;
    var tradeList = document.getElementById("trade-list");
    var newTrade = document.createElement("p");
    newTrade.innerHTML = tradeMessage + " - <span>" + new Date().toLocaleString() + "</span>";
    tradeList.prepend(newTrade);
    document.getElementById("quantity").value = "";
    document.getElementById("cryptocurrency").value = "";
    document.getElementById("trade-message").textContent = "Trade executed: " + tradeMessage;
}