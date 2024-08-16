function generateUpcomingEvents(events) {
    let upcomingEvents = [];

    events.forEach(item => {
        let dateParts = item.date.split("/") 
        let date = new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
        item.date = item.date.slice(0, -5)
        
        if (date.getTime() < Date.now()) {

        } else if (date.getTime() >= Date.now()) {
            upcomingEvents.push(item)
        } else {
            upcomingEvents.push(item)
        };
    
        item.description = item.description.replaceAll("\n", "<br>");
    });
    
    const upcomingEventsContainer = document.getElementById("upcoming_events");
    
    upcomingEvents.forEach(item => {
        item.description = item.description.replaceAll("\n", "<br>")
    
        if (item.button) {
            upcomingEventsContainer.innerHTML += `
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
            upcomingEventsContainer.innerHTML += `
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
};

fetch("./data/events.json")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        generateUpcomingEvents(data);
    })
    .catch(error => {
        console.error("Error: ", error)
    });
