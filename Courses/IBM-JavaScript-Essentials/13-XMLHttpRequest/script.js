document.getElementById("fetchButton").addEventListener("click", function () {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Initialize the request
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  // Set up a function to handle the response
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // Success! Handle the response here
      const data = JSON.parse(xhr.responseText);
      displayData(data);
    } else {
      // Handle errors here
      console.error("Request failed with status:", xhr.status);
    }
  };

  // Handle network errors
  xhr.onerror = function () {
    console.error("Request failed");
  };

  // Send the request
  xhr.send();
});

function displayData(data) {
  const container = document.getElementById("dataContainer");
  container.innerHTML = ""; // Clear previous data

  data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
    container.appendChild(postElement);
  });
}
