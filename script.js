document.addEventListener("DOMContentLoaded", function () {
    const loginOptions = document.querySelectorAll(".login-option");
    const loginForms = document.querySelectorAll(".login-form");
  
    loginOptions.forEach(option => {
      option.addEventListener("click", function () {
        const type = this.getAttribute("data-type");
        setActiveLogin(type);
      });
    });
  
    function setActiveLogin(type) {
      loginOptions.forEach(option => {
        option.classList.remove("active");
      });
      loginForms.forEach(form => {
        if (form.getAttribute("data-type") === type) {
          form.classList.add("active");
        } else {
          form.classList.remove("active");
        }
      });
    }
  
    const loginForm = document.getElementById("login-form");
    const emailForm = document.getElementById("email-form");
    const socialLogin = document.getElementById("social-login");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      // Simulate authentication (replace with actual authentication logic)
      if (username === "user" && password === "password") {
        alert("Login successful!");
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  
    emailForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      // Simulate authentication (replace with actual authentication logic)
      if (email === "user@example.com" && password === "password") {
        alert("Login successful!");

      } else {
        alert("Invalid email or password. Please try again.");
      }
    });
  
    // Add social login functionality here
    // For example, integrate with OAuth providers like Google, Facebook, etc.
  });
  