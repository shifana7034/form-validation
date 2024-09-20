function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const technologies = document.querySelectorAll('input[name="technology"]:checked');
    const errorMessage = document.getElementById('error-message');
  
    if (name === "") {
      errorMessage.textContent = "Please enter your name.";
      return false;
    }
  
    if (email === "") {
      errorMessage.textContent = "Please enter your email.";
      return false;
    }
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email.";
      return false;
    }
  
    if (!gender) {
      errorMessage.textContent = "Please select your gender.";
      return false;
    }
  
    if (technologies.length === 0) {
      errorMessage.textContent = "Please select at least one technology.";
      return false;
    }
  
    errorMessage.textContent = "";
    alert("Form submitted successfully!");
    return true;
  }
  