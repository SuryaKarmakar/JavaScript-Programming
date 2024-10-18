function callApi(url) {
  // Create a new XMLHttpRequest object
  var xhr = new XMLHttpRequest();

  // Initialize the request
  xhr.open("GET", url, true);

  // Set up a function to handle the response
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // Success! Handle the response here
      console.log("Response:", JSON.parse(xhr.responseText));
    } else {
      // Handle errors here
      console.error("Request failed with status:", xhr.status);
    }
  };

  // Handle network errors
  xhr.onerror = function () {
    console.error("Network error occurred.");
  };

  // Send the request
  xhr.send();
}

callApi("https://jsonplaceholder.typicode.com/todos");
