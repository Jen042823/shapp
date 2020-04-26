$(document).ready(function () {
    var input9am = $("#textarea9");
    var input10am = $("#textarea10");
    var input11am = $("#textarea11");
    var input12pm = $("#textarea12");
    var input13pm = $("#textarea13");
    var input14pm = $("#textarea14");
    var input15pm = $("#textarea15");
    var input16pm = $("#textarea16");
    var input17pm = $("#textarea17");
    //Assign saveBtn click listener for user input and time 
    $(".saveBtn").on("click", function () {
        localStorage.setItem("hour9",(input9am.val()));
        localStorage.setItem("hour10",(input10am.val()));
        localStorage.setItem("hour11",(input11am.val()));
        localStorage.setItem("hour12",(input12pm.val()));
        localStorage.setItem("hour13",(input13pm.val()));
        localStorage.setItem("hour14",(input14pm.val()));
        localStorage.setItem("hour15",(input15pm.val()));
        localStorage.setItem("hour16",(input16pm.val()));
        localStorage.setItem("hour17",(input17pm.val()));

    })
    //load any saved data from LocalStorage 
    $("#textarea9").val(localStorage.getItem("hour9"));
    $("#textarea10").val(localStorage.getItem("hour10"));
    $("#textarea11").val(localStorage.getItem("hour11"));
    $("#textarea12").val(localStorage.getItem("hour12"));
    $("#textarea13").val(localStorage.getItem("hour13"));
    $("#textarea14").val(localStorage.getItem("hour14"));
    $("#textarea15").val(localStorage.getItem("hour15"));
    $("#textarea16").val(localStorage.getItem("hour16"));
    $("#textarea17").val(localStorage.getItem("hour17"));

    //Date
    function renderTime() {
       var date = moment().format('MMMM Do YYYY, h:mm:ss a');
       $("#currentDay").text(date);


    } setInterval(renderTime,1000);


   
        //get current number of hours.
        var currentHour = parseInt(moment().format('HH'));

        // loop over time blocks
        $("textarea").each(function () {
            var blockHour = parseInt($(this).attr("name"));
            console.log( blockHour, currentHour)

            
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            if (blockHour > currentHour) {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    
  
})