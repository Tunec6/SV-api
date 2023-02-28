const footer = require('./component/footer');
const header = require('./component/header')



const contacts = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="CSS/style.css">
        <title>Contacts</title>
    </head>
    <body>
        ${header} 
        <main>
            <h1>Контакты:</h1>

            <ul>
                <li>Github</li>
                <li>vk</li>
                <li>inst</li>
            </ul>
        <main>
        ${footer}
    </body>
</html>
`

module.exports = contacts;