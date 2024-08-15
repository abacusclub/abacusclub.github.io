import members from "/data/members.json" with { type:"json" };

const members_container = document.getElementById("members")

members.forEach(item => {
    if (item.position.toLowerCase() != "official") {
        members_container.innerHTML += `
        <div class="member-card">
            <h1 class="bold">${item.name}</h1>
            <h2>${item.position}</h2>
        </div>

        `
    } else {
        members_container.innerHTML += `
        <div class="member-card">
            <h1 class="bold official">${item.name}</h1>
            <h2>${item.position}</h2>
        </div>  
        `
    };
});
