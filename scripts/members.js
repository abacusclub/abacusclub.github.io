const membersContainer = document.getElementById("members");

function generateMembers(data) {
    data.forEach(item => {
        if (item.position.toLowerCase() != "official") {
            membersContainer.innerHTML += `
                <div class="member-card">
                    <h1 class="bold">${item.name}</h1>
                    <h2>${item.position}</h2>
                </div>`
        } else {
            membersContainer.innerHTML += `
                <div class="member-card">
                    <h1 class="bold official">${item.name}</h1>
                    <h2>${item.position}</h2>
                </div>`                
        };
    });   
};

fetch("./data/members.json")
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        generateMembers(data);
    })
    .catch(error => {
        console.error("Error: ", error)
    });
