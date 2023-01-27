function generateHtml(generateManager, generateEngineer, generateIntern) {
    const htmlTemplate = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./assets/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <title>My Dev Team</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <main>
        
            ${generateManager}

            ${generateEngineer}

            ${generateIntern}
        </main>

    </body>
    </html>`
    return htmlTemplate
}

module.exports = generateHtml