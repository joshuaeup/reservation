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
    setInterval(() => {
        // Variables
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        updateDisplay(hour, minute);
    }, 500);
})();

function updateDisplay(hour, minute) {
    hourEl.innerHTML = String(hour).padStart(2, "0");
    minuteEl.innerHTML = minute;
    let welcomeMessage = "";

    if (hour < 12) {
        welcomeMessage = "It's Breakfast Time 🥞";
    } else if (hour === 12) {
        welcomeMessage = "It's Lunch Time 🍜";
    } else {
        welcomeMessage = "It's Dinner Time 🍽";
    }

    subTitleEl.innerHTML = welcomeMessage;
}

// Function to hide banner and show form
function launchReservation() {
    clearInterval();
    mainContainerEl.className += " hide";
    console.log("Clicked");

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

function reserveSlot(event) {
    event.preventDefault();
    alert("The form was submitted");
}
