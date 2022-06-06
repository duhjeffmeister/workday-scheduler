// Display current day
var currentDay = moment().format("dddd, MMMM Do, YYYY");
$('#currentDay').append(currentDay);

// Time block color-coded to indicate whether it is in the past, present, or future