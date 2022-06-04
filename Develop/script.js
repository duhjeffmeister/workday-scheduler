// Display current day
var currentDay = moment().format("dddd, MMMM do, YYYY");
$('#currentDay').append(currentDay);

// Time block color-coded to indicate whether it is in the past, present, or future

// Clicking into a timeblock allows you to enter an event

// Clicking save stores the event in local storage

// When refreshing the page the saved events persist