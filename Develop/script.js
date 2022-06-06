// Display current day
var currentDay = moment().format("dddd, MMMM Do, YYYY");
$('#currentDay').append(currentDay);

// Save data to local storage
$(document).ready(function() {

    // Save button into local storage based upon text
    $(".saveBtn").on("click", function() {
        var event = $(this).siblings(".calendarEntry").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, event);
    });

    // Have calendar entries color coded based upon time
    function timeTracker() {
        // Current time
        var currentTime = moment().hour();
        console.log(currentTime);
        // Loops over the different times and adds them to an array
        $(".timeBlock").each(function () {
            var entryTime = parseInt($(this).attr("id"))
            console.log(currentTime, entryTime);

        // Compares event time to current time
        if (entryTime < currentTime) {
            $(this).children(".calendarEntry").removeClass("future");
            $(this).children(".calendarEntry").removeClass("present");
            $(this).children(".calendarEntry").addClass("past");
        }
        else if (entryTime === currentTime) {
            $(this).children(".calendarEntry").removeClass("past");
            $(this).children(".calendarEntry").removeClass("future");
            $(this).children(".calendarEntry").addClass("present");
        }
        else {
            $(this).children(".calendarEntry").removeClass("present");
            $(this).children(".calendarEntry").removeClass("past");
            $(this).children(".calendarEntry").addClass("future");

        }
    });
    }

    timeTracker();
    //Pull local storage for persist
    $("#9 .calendarEntry").val(localStorage.getItem("9"));
    $("#10 .calendarEntry").val(localStorage.getItem("10"));
    $("#11 .calendarEntry").val(localStorage.getItem("11"));
    $("#12 .calendarEntry").val(localStorage.getItem("12"));
    $("#13 .calendarEntry").val(localStorage.getItem("13"));
    $("#14 .calendarEntry").val(localStorage.getItem("14"));
    $("#15 .calendarEntry").val(localStorage.getItem("15"));
    $("#16 .calendarEntry").val(localStorage.getItem("16"));
    $("#17 .calendarEntry").val(localStorage.getItem("17"));
});
