fetch("./data/events.json")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        generatePastAndUpcomingEvents(data);
    })
    .catch(error => {
        console.error("Error: ", error)
    });

fetch("./data/participatedevents.json")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        generateParticipatedEvents(data);
    })
    .catch(error => {
        console.error("Error: ", error)
    });

function generatePastAndUpcomingEvents(events) {
    let upcomingEvents = [];
    let pastEvents = [];

    events.forEach(item => {
        let dateParts = item.date.split("/") 
        let date = new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
        item.date = item.date.slice(0, -5)
        
        if (date.getTime() < Date.now()) {
            pastEvents.push(item)
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
    
    const pastEventsContainer = document.getElementById("past_events");
    
    pastEvents.forEach(item => {
        item.description = item.description.replaceAll("\n", "<br>")
    
        if (item.button) {
            pastEventsContainer.innerHTML += `
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
            pastEventsContainer.innerHTML += `
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

function generateParticipatedEvents(events) {
    const participatedEventsContainer = document.getElementById("participated_events");

    events.forEach(item => {
        item.date = item.date.slice(0, -5);
        item.description = item.description.replaceAll("\n", "<br>")
    
        if (item.button) {
            participatedEventsContainer.innerHTML += `
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
            participatedEventsContainer.innerHTML += `
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
