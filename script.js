"use strict";

// Dom Elements
const mainEl = document.querySelector("main");
const mainContainerEl = document.querySelector(".main-container");
const btnEl = document.getElementById("launch-reserve");
// document.getElementById("reserve").addEventListener("click", function () {
//     console.log("Reserve");
// });

// Function to hide banner and show form
function launchReservation() {
    mainContainerEl.className += " hide";
    console.log("Clicked");

    const formHtml = `
        <div id="form-container">
            <h2 id="form-container-title">Create Reservation</h2>
            <form id="form" onsubmit="reserveSlot(event)">
                <input
                    id="your_name"
                    type="text"
                    placeholder="&#xf406    Your name (e.g. John doe)"
                    
                /><br />
                <input
                    id="your_email"
                    type="email"
                    placeholder="&#xf0e0   Your email"
                    
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

    setTimeout(function () {
        mainEl.innerHTML = formHtml;
    }, 1000);

    // const formEl = document.getElementById("form");

    // formEl.addEventListener("submit", function (e) {
    //     e.preventDefault();
    //     console.log("Reserve");
    // });
}

// function reserve() {
//     // e.preventDefault();
//     alert("The form was submitted");
//     // console.log("Reserve");
// }

function reserveSlot(event) {
    event.preventDefault();
    alert("The form was submitted");
}

// function myFunction() {
//     alert("The form was submitted");
// }
