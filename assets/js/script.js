// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
  // Fetch the navbar.html file from the components folder
  fetch('components/navbar.html')
      .then(response => response.text())  // Convert the response to text
      .then(data => {
          // Insert the fetched HTML into the #navbar-placeholder div
          document.getElementById('navbar-placeholder').innerHTML = data;
      })
      .catch(error => {
          // Handle any errors that occur during the fetch
          console.error('Error loading the navbar:', error);
      });

  // Fetch the help.html file from the components folder
  fetch('components/help.html')
      .then(response => response.text())  // Convert the response to text
      .then(data => {
          // Insert the fetched HTML into the #help-placeholder div
          document.getElementById('help-placeholder').innerHTML = data;
      })
      .catch(error => {
          // Handle any errors that occur during the fetch
          console.error('Error loading the help component:', error);
      });

  // Fetch the footer.html file from the components folder
  fetch('components/footer.html')
      .then(response => response.text())  // Convert the response to text
      .then(data => {
          // Insert the fetched HTML into the #footer-placeholder div
          document.getElementById('footer-placeholder').innerHTML = data;
      })
      .catch(error => {
          // Handle any errors that occur during the fetch
          console.error('Error loading the footer component:', error);
      });
});
