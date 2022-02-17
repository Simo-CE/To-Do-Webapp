const express = require('express')
const api = express()
const port = 3000

api.get('/',(req, res) => {
    res.send('Hello world!');
})

api.listen(port, () => {
    console.log('TO DO: Api powered app')
})

/* 
* clg vscode
* test shortcut for console
* local storage
* js file enhancement
* express docs
* connecting index.html to api using middleware
* connecting the add button
*/