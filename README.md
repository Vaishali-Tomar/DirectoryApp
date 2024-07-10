Directory App
Table of Contents
Introduction
Features
Technologies Used
Installation
Usage
Components
DirectoryContext
Styling
Contributing
License
Contact
Introduction
The Directory App is a simple React application that allows users to manage a directory of persons. Users can add new entries with details such as name, date of birth, Aadhar number, mobile number, and age. The app demonstrates the use of React hooks, context API, and CSS for styling.

Features
Add new persons to the directory.
Display a list of persons with their details.
Delete persons from the directory.
Form validation to ensure all fields are filled before adding a new person.
Technologies Used
React.js: A JavaScript library for building user interfaces.
Context API: For managing global state.
CSS: For styling the components.
Usage
Once the app is running, you can interact with it by adding new persons to the directory. Fill out the form with the person's details and click the "Add" button. The new entry will be displayed in the table below. You can delete any entry by clicking the "Delete" button next to it.

Components
App.js
The main component that sets up the context provider and renders the Form and Table components.

Form.js
A component for adding new persons. It contains an input form and handles form submission.

Table.js
A component for displaying the list of persons. It retrieves data from the context and renders it in a table.

DirectoryContext.jsx
A context provider that manages the global state for the directory.

Form.css
Contains the styles for the Form component.

Table.css
Contains the styles for the Table component.

DirectoryContext
The DirectoryContext.jsx file sets up a context for managing the global state of the directory. It includes a context provider that maintains a list of persons and functions to add and delete persons.
