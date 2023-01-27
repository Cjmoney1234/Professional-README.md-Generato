function addManager (manager) {
    const generateManager = 
    `<div class="card-container">
        <div class="card-title-container">
            <h2 class="name">${manager.name}</h2>
            <h4 class="type"><i class="fa-solid fa-mug-hot"></i> Manager</h4>
        </div>
        <div class="card-body">
            <div class="content-body">
                <p><strong>ID:</strong> <span class="ID">${manager.id}</span></p>
                <p><strong>Email:</strong> <span class="Email"><a href="mailto:${manager.email}">${manager.email}</a></span></p>
                <p><strong>Office Number:</strong> <span class="officeNumber">${manager.officeNumber}</span></p>
            </div>
        </div>
    </div>`
return generateManager
}

function addEngineer (engineers) {
    let generateEngineer = ``
    for(let i = 0; i < engineers.length; i++) {
        let engineer = engineers[i]
        let card = 
        `<div class="card-container">
            <div class="card-title-container">
                <h2 class="name">${engineer.name}</h2>
                <h4 class="type"><i class="fa-solid fa-laptop-code"></i> Engineer</h4>
            </div>
            <div class="card-body">
                <div class="content-body">
                    <p><strong>ID:</strong> <span class="ID">${engineer.id}</span></p>
                    <p><strong>Email:</strong> <span class="Email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></p>
                    <p><strong>Github:</strong> <span class="Github"><a href="https://www.github.com/${engineer.github}"  target="_blank">${engineer.github}</a></span></p>
                </div>
            </div>
        </div>`
    generateEngineer += card
    }
    return generateEngineer
}


function addIntern (interns) {
    let generateIntern = ``
    for(let i = 0; i < interns.length; i++) {
        let intern = interns[i]
        let card = 
        `<div class="card-container">
            <div class="card-title-container">
                <h2 class="name">${intern.name}</h2>
                <h4 class="type"><i class="fa-solid fa-user-graduate"></i> Intern</h4>
            </div>
            <div class="card-body">
                <div class="content-body">
                    <p><strong>ID:</strong> <span class="ID">${intern.id}</span></p>
                    <p><strong>Email:</strong> <span class="Email"><a href="mailto:${intern.email}">${intern.email}</a></span></p>
                    <p><strong>School:</strong> <span class="Github">${intern.school}</span></p>
                </div>
            </div>
        </div>`

    generateIntern += card
    }
    return generateIntern
}


module.exports = { addManager, addEngineer, addIntern }