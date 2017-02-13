$(document).ready(function(){
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val()
    var emailInput = $("input#email").val()
    var valueInput = $("input#value").val()
    var greetingInput = $("input#greeting").val()

    $(".name").append(nameInput);
    $(".email").append(emailInput);
    $(".value").append(valueInput);
    $("greeting").append(greetingInput);


    $("#letter").show();

    event.preventDefault();

  });
});
