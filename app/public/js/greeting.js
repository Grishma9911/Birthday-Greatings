// When user click submit (clicks addBtn)
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newUser object
  var newUser = {
    uid: $("#uid").val().trim(),
    upwd: $("#upwd").val().trim()
  };

  console.log(newUser);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new/user", newUser)
    // On success, run the following code
    .then(function() {
      console.log("Inside post route");

    });

    $.post("api/new/greetings", newUser)
    // On success, run the following code
    .then(function() {
      console.log("Inside post greeting-route");

    });
 });
