 // Define the correct passcode
 const correctPasscode = '1234';

 // Function to handle form submission
 function handleFormSubmit(event) {
     event.preventDefault(); // Prevent form submission
 
     const enteredPasscode = document.getElementById('passcodeInput').value;
 
     // Check if the entered passcode matches the correct passcode
     if (enteredPasscode === correctPasscode) {
         // Simulate success animation (optional)
         document.querySelector('.overlay').style.transform = 'scale(1.1)';
         setTimeout(() => {
             window.location.href = 'Cryptocurrency.html'; // Redirect to desired URL
         }, 500);
     } else {
         // Display message for incorrect passcode
         document.getElementById('message').textContent = 'Incorrect passcode. Please try again.';
         document.getElementById('message').style.color = 'red';
     }
 
     // Clear the input field after verification
     document.getElementById('passcodeInput').value = '';
 }
 
 // Add form submission event listener
 document.getElementById('passcodeForm').addEventListener('submit', handleFormSubmit);
 
 // Function to toggle passcode visibility
 function togglePasscodeVisibility() {
     const passcodeInput = document.getElementById('passcodeInput');
     const toggleBtn = document.getElementById('togglePasscodeBtn');
 
     if (passcodeInput.type === 'password') {
         // Change input type to 'text' to show the passcode
         passcodeInput.type = 'text';
         toggleBtn.textContent = 'Hide Passcode';
     } else {
         // Change input type back to 'password' to hide the passcode
         passcodeInput.type = 'password';
         toggleBtn.textContent = 'Show Passcode';
     }
 }
