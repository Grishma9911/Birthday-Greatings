// When user chirps (clicks addBtn)
$("#chirp-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
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

//   // Empty each input box by replacing the value with an empty string
//   $("#author").val("");
//   $("#chirp-box").val("");
 });
