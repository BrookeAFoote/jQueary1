
$(document).ready(function() {
//click on table
var tableEl;
    $(".available").on("click", function(){
        //--reveals form
        $(this).css("background", "#ADAAAA");
        $(".hidden").slideToggle("show");
        tableEl = $(this)
        var tableNum = tableEl.text();
        $("#tableNumber").text(tableNum);
        addHoverData()
        //animations
     })//onclick

     function addHoverData() {
        var name = $("#name").val();
        var partySize = $("#guests").val();
        tableEl.append('<div class="hidden"><div>Guest Name:' + name + '</div><div>Size of Party:' + partySize + '</div></div>'
        );
     }

// click on save button
     $("button").on("click", function(event){
         event.preventDefault();
        //--hides form
        $(".hidden").slideToggle("show");
        //animations
        //--changes table color
        tableEl.addClass(".reserved");
        tableEl.removeClass(".available");
     })



//mouse over

//- show data
//mouse out
//- hide data




















}); //end of ready function