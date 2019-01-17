$(document).ready(function() {
  $("#submitAnimal").submit(function(event) {
    event.preventDefault();
    var animal = $("#chooseAnimalSubmit").val();
    console.log("hello");
    if (animal === "turtle") {
      $("#turtle").show();
      $("#tiger").hide();
      $("#pig").hide();
    }
    else if (animal === "tiger") {
      $("#tiger").show();
      $("#turtle").hide();
      $("#pig").hide();
    }
    else {
      $("#pig").show();
      $("#turtle").hide();
      $("#tiger").hide();
    }
    console.log('this is the end')

  });
});
