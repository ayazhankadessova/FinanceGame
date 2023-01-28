// <!-- Script to Validate email pattern-->

function validateEmail() {
  var em = document.getElementById("email").value;
  // var re = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$");
  var email = document.getElementById("EmailResponse");
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em)) {
    alert("You are Subscribed!")
    // email.style.paddingTop = "20px"; 
    // /* offset-x | offset-y | blur-radius | color */
    // 80% transparency of white
    email.style.textShadow = "0px 2px 2px rgba(255, 255, 255, 0.8)";
    email.innerHTML = "<span style='color: green;'>Subscribed!</span>";
    email.style.fontStyle= "italic";
    // email.style.backgroundColor = "white";
    // email.style.width = "100%"
    // setTimeout(submitForm, 3000);
  } else {
    alert("Invalid email address!")
    // email.style.paddingTop = "20px";
    // email.style.fontWeight = "800";
    email.style.textShadow = "0px 2px 2px rgba(255, 255, 255, 0.8)";
    email.innerHTML = "<span style='color: red;'>Incorrect Format!</span>";
    email.style.fontStyle= "italic";
    // email.style.backgroundColor = "white";
    // email.style.width = "100%"
    // setTimeout(submitForm, 3000);
  }
}