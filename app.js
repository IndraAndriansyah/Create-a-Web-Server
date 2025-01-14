'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'
const dicoding_username = "indramisnadin"

const app = express()
/*
[ROUTE] '/'
[Response] => Hello world!
 */
app.get('/', (req, res) => {
    res.send('Indra Andriansyah Dody Misnadin!\n')
})

/*
Optional [ROUTE] '/me'
[Response] => Dicoding username.
*/

app.get('/me', (req, res) => {
	res.send(dicoding_username)
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
