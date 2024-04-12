/********* create variables here *********/
var dailyRate = 40;
var dayCounter = 0;
var calculatedCostElement = document.getElementById('calculated-cost');
var daysOfWeek = document.querySelectorAll('.day-selector li');
var clearButton = document.getElementById('clear-button');
var halfDayButton = document.getElementById('half');
var fullDayButton = document.getElementById('full');

/********* calculate *********/
function calculateTotalCost() {
    var totalCost = dailyRate * dayCounter;
    calculatedCostElement.innerHTML = totalCost.toString();
}

calculatedCostElement.innerHTML = '0';

/********* colour change days of week *********/
daysOfWeek.forEach(function(day) {
    day.addEventListener('click', function() {
        if (!this.classList.contains('clicked')) {
            this.classList.add('clicked');
            dayCounter++;
        } else {
            this.classList.remove('clicked');
            dayCounter--;
        }
        calculateTotalCost();
    });
});

/********* clear days *********/
clearButton.addEventListener('click', function() {
    daysOfWeek.forEach(function(day) {
        day.classList.remove('clicked');
    });
    dayCounter = 0;
    calculateTotalCost();
});

/********* change rate *********/
halfDayButton.addEventListener('click', function() {
    if (!this.classList.contains('clicked')) {
        dailyRate = 20;
        this.classList.add('clicked');
        fullDayButton.classList.remove('clicked');
        calculateTotalCost();
    }
});

fullDayButton.addEventListener('click', function() {
    if (!this.classList.contains('clicked')) {
        dailyRate = 40;
        this.classList.add('clicked');
        halfDayButton.classList.remove('clicked');
        calculateTotalCost();
    }
});