"use strict";

// Dom Elements
const mainEl = document.querySelector("main");
const mainContainerEl = document.querySelector(".main-container");
const btnEl = document.getElementById("launch-reserve");
const hourEl = document.getElementById("date-hour");
const minuteEl = document.getElementById("date-minute");
const subTitleEl = document.getElementById("date-subTitle");

// Runs as soon as page loads
(function () {
    // Updates UI
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    updateDisplay(hour, minute);
    // Updates every half of a second
    setInterval(() => {
        // Variables
        date = new Date();
        hour = date.getHours();
        minute = date.getMinutes();
        updateDisplay(hour, minute);
    }, 500);
})();

// Function to update UI
function updateDisplay(hour, minute) {
    parseHour(hour);
    minuteEl.innerHTML = minute;
    checkMealTime(hour);
}

// Function to check which meal message to print to DOM
function checkMealTime(hour) {
    let welcomeMessage = "";

    if (hour < 12) {
        welcomeMessage = "It's Breakfast Time 🥞";
    } else if (hour < 14) {
        welcomeMessage = "It's Lunch Time 🍜";
    } else {
        welcomeMessage = "It's Dinner Time 🍽";
    }
    // Updates DOM
    subTitleEl.innerHTML = welcomeMessage;
}

// Function to hide banner and show form
function launchReservation() {
    // Remove hour refresh
    clearInterval();
    mainContainerEl.className += " hide";
    console.log("Clicked");

    // HTML form
    const formHtml = `
        <div id="form-container">
            <h2 id="form-container-title">Create Reservation</h2>
            <form id="form" onsubmit="reserveSlot(event)">
                <input
                    id="your_name"
                    type="text"
                    placeholder="&#xf406    Your Name (e.g. John doe)"
                    
                /><br />
                <input
                    id="your_email"
                    type="email"
                    placeholder="&#xf0e0   Your Email"
                    
                /><br />
                <input
                    id="your_party_size"
                    type="number"
                    placeholder="&#xf0c0   A Table For?"
                    
                /><br />
                <input
                    type="date"
                    placeholder="&#xf017    Reservation Time"
                    
                />
                <input
                    type="submit"
                    value="Submit"
                    id="reserve"
                />
            </form>
        </div>
    `;
    // Wait 1 second before displaying
    setTimeout(function () {
        mainEl.innerHTML = formHtml;
    }, 1000);
}

// Function to convert hour to Standard Time
function parseHour(hour) {
    if (hour > 0 && hour <= 12) {
        // Checks if hour value falls within 12
        hourEl.innerHTML = String(hour).padStart(2, "0");
    } else if (hour > 12) {
        // Checks if hour value exceeds 12
        hourEl.innerHTML = String(hour - 12).padStart(2, "0");
    } else if (hour == 0) {
        // Checks if hour value equals 0 then sets to 12
        hourEl.innerHTML = "12";
    }
}

// Btn for form submission
function reserveSlot(event) {
    event.preventDefault();
    alert("The form was submitted");
}
