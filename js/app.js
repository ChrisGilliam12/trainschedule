$(document).ready(function(){
    let name;
    let destination;
    let time;
    let frequency;
    let currentTime = moment()
    

$('#submit').on ('click', function() {
    event.preventDefault()
    let name = $('#newTrainName').val() 
    let destination = $('#newTrainDestination').val()
    let time = $('#newTrainTime').val()
    let militaryTime = (moment(time, 'hh:mm a').format('HH:mm'));
    let frequency = $('#newTrainFrequency').val()
    
    
    $('#trains').append("<td>" + name +"</tr>")
    $('#trains').append("<td>" + destination + "</td>")
    $('#trains').append("<td>" + militaryTime + "</td>")
    
    //this gets the hours and minutes from the time the train starts
   
    let hoursMinutes = militaryTime.split(':')
    let hours = hoursMinutes[0]
    let minutes = hoursMinutes[1]
  
    //then subtracts the hours and minutes from the current time

    let timeMinusHours = currentTime.subtract(hours, 'hour')
    let timeMinusMinutes = currentTime.subtract(minutes, 'minute')
    
    //then gets the time its been since train starts and converts it to only minutes
     
    let formattedTime = timeMinusMinutes.format('HH:mm')
    let splitTime = formattedTime.split(':')
    let onlyMinutes = parseInt(splitTime[0]) * 60 + parseInt(splitTime[1])
   
    //then gets minutes until next train

    let nextTrain = frequency -(onlyMinutes % frequency)
   
    //i feel like there was probably an easier way to do this...

    $('#trains').append("<td>" + nextTrain + " minutes </td>")
    $('#trains').append("<tr></tr>")
    



})
})