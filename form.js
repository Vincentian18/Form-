document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number=document.getElementById("number").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseMsg = document.getElementById("responseMsg");
  
    if (name && email && number && message) {
      responseMsg.textContent = "Thanks for contacting us, " + name + "!";
      this.reset();
    } else {
      responseMsg.textContent = "Please fill all the fields.";
      responseMsg.style.color = "red";
    }
  });
  
  