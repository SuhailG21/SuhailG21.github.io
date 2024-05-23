//index.html

//Tab on small devices
function toggleFunction3() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//full size of qualifications
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }


  //Sending email
  function sendMessage() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    // Check if any required fields are empty
    if (!name || !email || !message) {
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.textContent = 'Please fill in all the information.';
      errorMessage.style.display = 'block';

      // Hide error message after 3 seconds
      setTimeout(() => {
        errorMessage.style.display = 'none';
      }, 3000);

      return; // Exit function if fields are empty
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.textContent = 'Please enter a valid email address.';
      errorMessage.style.display = 'block';

      // Hide error message after 3 seconds
      setTimeout(() => {
        errorMessage.style.display = 'none';
      }, 3000);

      return; // Exit function if email format is incorrect
    }

    const messageInfo = {
      name: name,
      email: email,
      message: message
    };

    let messages = localStorage.getItem('messages');
    messages = messages ? JSON.parse(messages) : [];
    messages.push(messageInfo);
    localStorage.setItem('messages', JSON.stringify(messages));

    // Clear form fields
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    // Display success message
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    // Hide success message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);

    // Send email
    sendEmail(messageInfo);
  }

  function sendEmail(messageInfo) {
    // Use EmailJS to send the email
    emailjs.send('service_ivx70ok', 'template_rybffbz', {
      name: messageInfo.name,
      email: messageInfo.email,
      message: messageInfo.message
    }).then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    }, (error) => {
      console.error('Failed to send email:', error);
    });
  }


  //Facebook icon
  function goToWebsite() {
    window.location.href = 'https://www.facebook.com'
  }

  // Get reference to the icon element
  var Facebook = document.getElementById('Facebook');

// Attach click event listener to the icon
Facebook.addEventListener('click', function() {
  // Call the function to open the new page
  goToWebsite();
});

//Instagram icon
function goToWebsite1() {
    window.location.href = 'https://www.instagram.com'
  }

  // Get reference to the icon element
  var Instagram = document.getElementById('Instagram');

// Attach click event listener to the icon
Instagram.addEventListener('click', function() {
  // Call the function to open the new page
  goToWebsite1();
});

//Snapchat icon
function goToWebsite2() {
    window.location.href = 'https://www.snapchat.com'
  }

  // Get reference to the icon element
  var Snapchat = document.getElementById('Snapchat');

// Attach click event listener to the icon
Snapchat.addEventListener('click', function() {
  // Call the function to open the new page
  goToWebsite2();
});

//Twitter icon
function goToWebsite3() {
    window.location.href = 'https://www.twitter.com'
  }

  // Get reference to the icon element
  var Twitter = document.getElementById('Twitter');

// Attach click event listener to the icon
Twitter.addEventListener('click', function() {
  // Call the function to open the new page
  goToWebsite3();
});

//Diamond icon
// Function to handle icon click event
function openNewPage() {
    // Specify the URL of the page you want to open
    var newPageUrl = 'Passcode.html'; // Replace 'Passcode.html' with your desired URL

    // Open the new page in the current tab
    window.location.href = newPageUrl;
}

// Get reference to the icon element
var instagramIcon = document.getElementById('instagramIcon');

// Attach click event listener to the icon
instagramIcon.addEventListener('click', function() {
    // Call the function to open the new page
    openNewPage();
});

//Soccer icon
// Function to handle icon click event
function openNewPage1() {
    // Specify the URL of the page you want to open
    var newPageUrl = 'Soccer.html'; // Replace 'Passcode.html' with your desired URL

    // Open the new page in the current tab
    window.location.href = newPageUrl;
}

// Get reference to the icon element
var Soccer = document.getElementById('Soccer');

// Attach click event listener to the icon
Soccer.addEventListener('click', function() {
    // Call the function to open the new page
    openNewPage1();
});

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  } 


  (function(){
    emailjs.init('WE8aMV6cIZA5pZOHz');
    })();

  //----------------------------------------------------------------------------------------------------------------------

 

  

  

  