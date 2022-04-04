// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

$(document).ready(function() {

$("#currentDay").text(moment().format("MMMM Do YYYY"));
    
var description = $(".description");
var saveButton = $(".saveBtn");
var currentTime = moment().hour();
    
description.each(function () {
    var timeBlock = parseInt($(this).attr("id"));
    
    if (timeBlock === currentTime) {
    $(this).addClass("present");
    $(this).removeClass("future");
    $(this).removeClass("past");
    }
    
    else if (timeBlock < currentTime) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
    }
    
    else {
    $(this).addClass("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
    }
    });
    
description.each(function() {
    
    for (let i = 0; i < localStorage.length; i++) {
        var objectKey = localStorage.key(i);
        var taskValue = localStorage.getItem(objectKey);
        var rowHour = $(this).siblings(".hour").text();
        
        if (objectKey === rowHour) {
            $(this).val(taskValue);
        }
        }
    });
    
function saveTasks () {
    var currentTime = $(this).data("hour");
    var rowHour = $(this).siblings(".hour").text();
    var task = $(this).siblings(".description").val();
    
    if (task === "") {
    localStorage.setItem(rowHour, "");
    }
    
    else {
    localStorage.setItem(rowHour, task);
    }
    }
    
    saveButton.on("click", saveTasks);
    
});