// let todoItems = [];
//
// function addItem(text){
//   const todo= {
//     text,
//     checked:false,
//     id: Date.now(),
//   };
//   todoItems.push(todo);
//   console.log(todoItems);
// }
var taskNumber = 0;

const submitButton = $("button").click(function(){
  var newTask = ($("#taskInput").val());
  $("ul").append("<li>" + (taskNumber+1) + ". "+newTask + "</li>")
  taskNumber++;
});

var todoArray = [];
