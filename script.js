
$(document).ready(function() {
    var element = $(".available");
//click on table
    element.on("click", function(){
        //--reveals form
        $(".hidden").toggleClass("show");
     })//onclick

// click on save button
     $("button").on("click", function(){
        //--hides form
        $(".hidden").toggleClass("show");
        //--changes table color
        // $(".table").css("background","#adaaaa");
        $(".table").addClass(".reserved");
        $(".table").removeClass(".available");
     })




















}); //end of ready function