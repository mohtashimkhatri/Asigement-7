// var element = document.getElementById("myElement");
// element.addEventListener("click", function() {
//   alert("You clicked on the element!");
// });
// Get references to the HTML elements
//   var clickToShowElement = document.getElementById("clickToShow");
//   var elementToHide = document.getElementById("elementToHide");

//   // Add a click event listener to the "Click to Hide" element
//   clickToShowElement.addEventListener("click", function() {
//     // Hide the element by changing its style to display: none
//     elementToHide.style.display = "none";
//   });
// Get a reference to the link element
//   var link = document.getElementById("myLink");

// Store the original link color
//   var originalColor = link.style.color;

//   // Add a mouseover event listener to change the link color
//   link.addEventListener("mouseover", function() {
//     link.style.color = "red";
//   });

//   // Add a mouseout event listener to revert to the original color
//   link.addEventListener("mouseout", function() {
//     link.style.color = originalColor;
//   });
// document.querySelector('.scroll-top-link').addEventListener('click', function(event) {
//     event.preventDefault(); // Prevent the default link behavior (e.g., navigating to a new page)

//     // Scroll to the top of the page smoothly
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// function Ubaaid() {
//   alert("Welcome");
// }
// function getValue() {
//   // Get the checkbox element by its ID
//   var checkbox = document.getElementById("checkbox");

//   // Check if the checkbox is checked
//   if (checkbox.checked) {
//     console.log("Checkbox is checked");
//   } else {
//     console.log("Checkbox is not checked");
//   }
// }
// function getValue() {
//   // Get the select element by its ID
//   var selectBox = document.getElementById("selectBox");

//   // Get the selected option's value
//   var selectedValue = selectBox.value;

//   // Print the selected value to the console
//   console.log("Selected value: " + selectedValue);
// }
// function fillInput() {
//   var inputElement = document.getElementById("textInput");

//   var inputValue = inputElement.value;

//   if (inputValue === "") {
//     inputElement.value = "Default Text";
//   }
// }
function validateForm() {
  // Get form input values
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  // Get error message element
  var errorMessages = document.getElementById("errorMessages");

  // Reset error messages
  errorMessages.innerHTML = "";

  // Validate username
  if (username.length < 5) {
    errorMessages.innerHTML +=
      "Username must be at least 5 characters long.<br>";
  }

  // Validate email
  if (!isValidEmail(email)) {
    errorMessages.innerHTML += "Invalid email address.<br>";
  }

  // Validate password
  if (password.length < 8) {
    errorMessages.innerHTML +=
      "Password must be at least 8 characters long.<br>";
  }

  // Validate password confirmation
  if (password !== confirmPassword) {
    errorMessages.innerHTML += "Passwords do not match.<br>";
  }

  // If there are no error messages, the form is valid
  if (errorMessages.innerHTML === "") {
    alert("Registration successful!");
    document.getElementById("registrationForm").reset();
  }
}

// Function to validate email using a regular expression
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
