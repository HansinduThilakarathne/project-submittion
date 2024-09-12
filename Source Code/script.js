function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === "" || password === "") {
      document.getElementById('error-message').innerText = "Please fill in all fields.";
      return false;
    }
  
    alert("Login successful!");
    return true;
  }
  