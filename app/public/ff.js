$("#formButton").on("click", function(event) {
  event.preventDefault();
  var newFriend = {
    name: $("#name").val().trim(),
    role: $("#photo").val().trim(),
    questions: [
      $('.radio1:checked').val(),
      $('.radio2:checked').val(),
      $('.radio3:checked').val(),
      $('.radio4:checked').val(),
      $('.radio5:checked').val(),
      $('.radio6:checked').val(),
      $('.radio7:checked').val(),
      $('.radio8:checked').val(),
      $('.radio9:checked').val(),
      $('.radio10:checked').val()
    ]
  };
  console.log(newFriend);
  alert(newFriend);
  $.post("/api/new", newFriend)
  .done(function(data) {
  console.log(data);
  alert("Adding character...");
});
});
