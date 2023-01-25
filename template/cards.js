function generateManagerCard (manager) {
    const managerCard = 
    `<div class="card-container">
        <div class="card-title-container">
            <h2 class="name">${manager.name}</h2>
            <h4 class="type">Manager</h4>
        </div>
        <div class="card-body">
            <div class="content-body">
                <p><strong>ID:</strong> <span class="ID">${manager.id}</span></p>
                <p><strong>Email:</strong> <span class="Email"><a href="mailto:${manager.email}">${manager.email}</a></span></p>
                <p><strong>Office Number:</strong> <span class="officeNumber">${manager.officeNumber}</span></p>
            </div>
        </div>
    </div>`
return managerCard
}

function generateEngineerCards (engineers) {
    let engineerCards = ``
    for(let i = 0; i < engineers.length; i++) {
        let engineer = engineers[i]
        let card = 
        `<div class="card-container">
            <div class="card-title-container">
                <h2 class="name">${engineer.name}</h2>
                <h4 class="type">Engineer</h4>
            </div>
            <div class="card-body">
                <div class="content-body">
                    <p><strong>ID:</strong> <span class="ID">${engineer.id}</span></p>
                    <p><strong>Email:</strong> <span class="Email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></p>
                    <p><strong>Github:</strong> <span class="Github"><a href="https://www.github.com/${engineer.github}"  target="_blank">${engineer.github}</a></span></p>
                </div>
            </div>
        </div>`
    engineerCards += card
    }
    return engineerCards
}


function generateInternCards (interns) {
    let internCards = ``
    for(let i = 0; i < interns.length; i++) {
        let intern = interns[i]
        let card = 
        `<div class="card-container">
            <div class="card-title-container">
                <h2 class="name">${intern.name}</h2>
                <h4 class="type">Intern</h4>
            </div>
            <div class="card-body">
                <div class="content-body">
                    <p><strong>ID:</strong> <span class="ID">${intern.id}</span></p>
                    <p><strong>Email:</strong> <span class="Email"><a href="mailto:${intern.email}">${intern.email}</a></span></p>
                    <p><strong>School:</strong> <span class="Github">${intern.school}</span></p>
                </div>
            </div>
        </div>`

    internCards += card
    }
    return internCards
}


module.exports = { generateManagerCard, generateEngineerCards, generateInternCards }