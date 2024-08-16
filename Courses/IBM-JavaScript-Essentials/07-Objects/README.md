# Develop an Application to Create Book Management System Using Objects

## What you will learn

You will explore concepts such as collecting user input through HTML forms, handling input data using JavaScript objects, manipulating arrays to manage book data, dynamically update to display books, and implementing functionalities like adding, editing, and deleting book entries. This practical exercise provides learners with insights into fundamental concepts such as array methods, form handling, and user interaction, forming a foundational understanding of web development principles.

Learning objectives

1. Implement a book management interface: Create an interface to collect book details including name, author, description, and page count using HTML form elements.

2. Store and manage book data: Use JavaScript arrays and objects to store and manage book information entered by users, allowing for functionalities like adding, editing, and deleting book entries.

3. Dynamic display of book information: Dynamically update the webpage by displaying the entered book details in a structured format, enabling users to view a list of added books.

4. Interactive user experience: Facilitate user interaction by allowing edits and deletions of book entries directly from the displayed list, enhancing the usability of the book management system.

# Summary

1. Book management interface: The code sets up a simple web interface for managing books. It includes input fields for book name, author name, book description, and the number of pages. Users can add books using the "Add Book" button.

2. Dynamic display of books: Upon adding books, the showbooks() function dynamically generates HTML content to display the list of added books. It formats and structures the book details using JavaScript's map() function to create HTML elements for each book, including buttons for editing and deleting individual book entries.

3. Book handling functionality: The code provides functionalities for editing and deleting book entries. The editbook() function allows users to edit book details by populating the input fields with the selected book's information. Meanwhile, the deletebook() function removes a book entry from the displayed list when the corresponding delete button is clicked. However, both editing and deletion actions currently lack a specific updatebooks() function to handle the updating of book data in the interface.
