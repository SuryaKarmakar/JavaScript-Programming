// Defining variables and if else statement for userRole and accessLevel
let userRole = "admin";
let accessLevel;

// Now, the above code will check if userRole is "admin" or something else. Based on the value of userRole, the accessLevel variable will be set to one of the following.
if (userRole === "admin") {
  accessLevel = "Full access granted";
} else if (userRole === "manager") {
  accessLevel = "Limited access granted";
} else {
  accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel); // Access Level:"Full access granted"

// Defining variables and nested if…else statementd for isLoggedIn and userMessage
let isLoggedIn = true;
let userMessage;

// Now, implement and execute the Nested if…else statement to check if user is logged in or not
if (isLoggedIn) {
  if (userRole === "admin") {
    userMessage = "Welcome, Admin!";
  } else {
    userMessage = "Welcome, User!";
  }
} else {
  userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage); // User Message:"Welcome, Admin!"

// Defining variables and switch statement for userType and userCategory
let userType = "subscriber";
let userCategory;

// Now, you need to implement and execute the switch statement to evaluate the value of userType by providing different case values
switch (userType) {
  case "admin":
    userCategory = "Administrator";
    break;
  case "manager":
    userCategory = "Manager";
    break;
  case "subscriber":
    userCategory = "Subscriber";
    break;
  default:
    userCategory = "Unknown";
}

console.log("User Category:", userCategory); // User Category:"Subscriber"

// Use ternary operator for isAuthenticated and authenticationStatus
let isAuthenticated = true;

// Declare one more variable named authenticationStatus and use a ternary operator (? :) to see if the user is authenticated or not
let authenticationStatus = isAuthenticated
  ? "Authenticated"
  : "Not authenticated";

console.log("Authentication Status:", authenticationStatus); // Authentication Status:"Authenticated"
