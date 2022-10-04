var taskNumber = 0;
var check = '<input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">';


$("button").click(function () {

  var taskInput= $("#taskInput");
  var newTask = taskInput.val();
  $("ul").append(check + "<li>" + (taskNumber + 1) + ". " + newTask + "</li>");
  taskNumber++;
  $("input").val('');

});

$("#taskInput").keyup(function(event) {
    if (event.keyCode === 13) {
      $("button").click();
    }
  });
