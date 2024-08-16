import events from "/data/events.json" with { type:"json" };

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
    item.description = item.description.replaceAll("\n", "<br>")

    if (item.button) {
        upcoming_events_container.innerHTML += `
            <div class="event hidden">
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
            <div class="event hidden">
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

     
const observer = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hidden_elements = document.querySelectorAll('.hidden')
hidden_elements.forEach((element) => {
    observer.observe(element)
});
