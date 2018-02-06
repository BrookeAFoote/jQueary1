
$(document).ready(function() {
//click on table
    $(".available").on("click", function(){
        //--reveals form
        $(this).css("background", "#ADAAAA");
        $(".hidden").slideToggle("show");
        //animations
     })//onclick

// click on save button
     $("button").on("click", function(){
         event.preventDefault();
        //--hides form
        $(".hidden").slideToggle("show");
        //animations
        //--changes table color
        $(".table").addClass(".reserved");
        $(".table").removeClass(".available");
     })
//store input
var nameInput = $("#name").val
var phoneInput = $("#phone").val
var guestsInput = $("#guests").val

//dislay input on hover




















}); //end of ready function