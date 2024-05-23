let selectedOption = "basic";

function upgradeMembership() {
    switch (selectedOption) {
        case "basic":
            alert("You are already on the Basic Membership.");
            break;
        case "premium":
            alert("Congratulations! You have upgraded to Premium Membership.");
            break;
        case "platinum":
            alert("Congratulations! You have upgraded to Platinum Membership.");
            break;
        default:
            alert("Please select a membership option to upgrade.");
    }
}

document.querySelectorAll('.membership-option').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.membership-option').forEach(option => {
            option.classList.remove('selected');
        });
        item.classList.add('selected');
        selectedOption = item.id;
    });
});