function generateHtml(managerCard, engineerCards, internCards) {
    const htmlTemplate = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Dev Team</title>
        <link rel="stylesheet" href="./assets/style.css">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main>
            ${managerCard}

            ${engineerCards}

            ${internCards}
        </main>

    </body>
    </html>`
    return htmlTemplate
}

module.exports = generateHtml