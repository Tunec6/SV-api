const footer = require('./component/footer');
const header = require('./component/header')



const aboutme = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="CSS/style.css">
        <title>About me</title>
    </head>
    <body>
        ${header} 
        <main>
            <h1>Обо мне:</h1>
            <ul>
                <li>Имя: Vadim</li>
                <li>Возраст: 18</li>
                <li>Город: Surgut</li>
            </ul>
        <main>
        ${footer}
    </body>
</html>
`


module.exports = aboutme;