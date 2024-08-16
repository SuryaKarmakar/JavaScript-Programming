function submitFeedback() {
  // getting values from the respective HTML input elements using getElementById.
  const username = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const job = document.getElementById("job").value;
  const designation = document.getElementById("designation").value;
  const productType = document.getElementById("productType").value;
  const feedback = document.getElementById("feedbackText").value;

  // It dynamically updates the displayed content within that specific HTML element.
  document.getElementById("userName").innerHTML = username;
  document.getElementById("userAge").innerHTML = age;
  document.getElementById("userEmail").innerHTML = email;
  document.getElementById("userJob").innerHTML = job;
  document.getElementById("userDesignation").innerHTML = designation;
  document.getElementById("userProductChoice").innerHTML = productType;
  document.getElementById("userFeedback").innerHTML = feedback;

  // updating the non visible "userInfo div element" to visible element. setting it to 'block', which alters its visibility on the webpage to be displayed as a block-level element.
  document.getElementById("userInfo").style.display = "block";
}

// This line of code fetches the HTML element with the ID 'submitBtn' using its unique identifier ('getElementById')
const submitButton = document.getElementById("submitBtn");

// Now, assigns the function submitFeedback to execute when the onclick event occurs on the HTML element referenced by the variable submitButton.
submitButton.onclick = submitFeedback;

// Implement key press to submit feedback.

//  if the user presses the 'Enter' key, the feedback form should submit, similar to clicking the submit button.
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitFeedback();
  }
});
