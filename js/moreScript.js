$(document).ready(function(){
  $("blanks form").submit(function(event) {

    var retort = $("input#whisper").val();

    $(".retort").append(retort);

    $("#yell").show();
    event.preventDefault();
  });
});
