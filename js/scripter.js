$(document).ready(function() {
  $("#dataDude form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var streetAddyInput = $("input#streetAddy").val();
    var zipCodeInput = $("input#zipCode").val();
    var stateInput = $("select#state").val();
    var cityInput = $("input#city").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".streetAddy").text(streetAddyInput);
    $(".zipCode").text(zipCodeInput);
    $(".state").text(stateInput);
    $(".city").text(cityInput);

    $("#finalReceipt").show();
    $("#dataDude").hide();

    event.preventDefault();

  });
});
