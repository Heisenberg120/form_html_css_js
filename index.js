// CODE FOR ACCESSING DATA VALUES ENTERED BY USER IN THE FORM
window.writeValues = function (form) {
  var name = form.name.value;
  var age = form.age.value;
  var email = form.email.value;
  var password = form.password.value;
  var gender = form.gender.value;

  // CODE FOR ACCESSING CHECKBOX VALUES INTO AN ARRAY
  var favriteProgrammingLanguges = new Array();
  $("input[name='programming']:checked").each(function () {
    favriteProgrammingLanguges.push($(this).val());
  });

  // VALIDATION CODE

  // VALIDATING EMAIL FUNCTION
  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }

  // VALIDATING "NAME"
  if (name == "" || name.match(/^-?\d+$/)) {
    alert("Name neither should be empty nor contains any numeric digit");
    document.getElementById("name").focus();
  }
  // VALIDATING "AGE"
  else if (age <= 1 || age >= 120) {
    alert("Age must be between 1 and 120");
    document.getElementById("age").focus();
  }
  // VALIDATNG "EMAIL USING FUNCTION IsEmail()"
  else if (IsEmail(email) == false) {
    alert("Invalid email");
    document.getElementById("email").focus();
  }
  // VALIDATING "PASSWORD"
  else if (password.length < 8) {
    alert("Password must be 8 characters long");
    document.getElementById("password").focus();
  }
  // VALIDATING "GENDER"
  else if (gender.length == 0) {
    alert("Please select a gender");
  }
  // VALIDATING "PROGRAMMING LANGUAGES"
  else if (favriteProgrammingLanguges.length == 0) {
    alert("Please select your favorite programming languages.");
  }
  // HIDING THE FORM AND SHOWING THE VALUES ENTERED BY USER 
  else {
    $(".hide").hide();
    $(".dataShow").show();
    document.getElementById("fname").innerHTML = name;
    document.getElementById("yourAge").innerHTML = age;
    document.getElementById("emailId").innerHTML = email;
    document.getElementById("pass").innerHTML = password;
    document.getElementById("gen").innerHTML = gender;
    document.getElementById("prog").innerHTML = favriteProgrammingLanguges;
  }
};
