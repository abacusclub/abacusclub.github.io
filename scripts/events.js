import events from "/data/events.json" with { type:"json" };
import participated from "/data/participatedevents.json" with { type:"json" };

let upcoming = [];
let past = [];

events.forEach(item => {
    let dateParts = item.date.split("/") 
    let date = new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
    item.date = item.date.slice(0, -5)
    
    if (date.getTime() < Date.now()) {
        past.push(item)
    } else if (date.getTime() >= Date.now()) {
        upcoming.push(item)
    } else {
        upcoming.push(item)
    };

    item.description = item.description.replaceAll("\n", "<br>");
});

const upcoming_events_container = document.getElementById("upcoming_events");

upcoming.forEach(item => {
    if (item.button) {
        upcoming_events_container.innerHTML += `
            <div class="event">
                <div class="event-name-date">
                    <h1>${item.name}</h1>
                    <h1>${item.date}</h1>
                </div>
                <div class="event-desc">
                    <p>${item.description}</p>
                    <a class="event-button" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.button}<i class="fa-solid fa-up-right-from-square fa-sm"></i></a>
                </div>
            </div>`
    } else {
        upcoming_events_container.innerHTML += `
            <div class="event">
                <div class="event-name-date">
                    <h1>${item.name}</h1>
                    <h1>${item.date}</h1>
                </div>
                <div class="event-desc">
                    <p>${item.description}</p>
                </div>
            </div>`     
    };
});

const past_events_container = document.getElementById("past_events");

past.forEach(item => {
    if (item.button) {
        past_events_container.innerHTML += `
            <div class="event">
                <div class="event-name-date">
                    <h1>${item.name}</h1>
                    <h1>${item.date}</h1>
                </div>
                <div class="event-desc">
                    <p>${item.description}</p>
                    <a class="event-button" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.button}<i class="fa-solid fa-up-right-from-square fa-sm"></i></a>
                </div>
            </div>`
    } else {
        past_events_container.innerHTML += `
            <div class="event">
                <div class="event-name-date">
                    <h1>${item.name}</h1>
                    <h1>${item.date}</h1>
                </div>
                <div class="event-desc">
                    <p>${item.description}</p>
                </div>
            </div>`     
    };
});

const participated_events_container = document.getElementById("participated_events");

participated.forEach(item => {
    item.date = item.date.slice(0, -5);

    if (item.button) {
        participated_events_container.innerHTML += `
            <div class="event">
                <div class="event-name-date">
                    <h1>${item.name}</h1>
                    <h1>${item.date}</h1>
                </div>
                <div class="event-desc">
                    <p>${item.description}</p>
                    <a class="event-button" href="${item.url}" target="_blank" rel="noopener noreferrer">${item.button}<i class="fa-solid fa-up-right-from-square fa-sm"></i></a>
                </div>
            </div>`
    } else {
        participated_events_container.innerHTML += `
            <div class="event">
                <div class="event-name-date">
                    <h1>${item.name}</h1>
                    <h1>${item.date}</h1>
                </div>
                <div class="event-desc">
                    <p>${item.description}</p>
                </div>
            </div>`     
    };
});
