const express = require('express')
const expressHandlebars = require('express-handlebars')
const handlers = require('./lib/handlers')

const app = express()

//configure handlebars view engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

//define listen port number
const port = process.env.PORT || 3000

//get routes
app.get('/', handlers.home)

app.get('/about', handlers.about)

app.use(handlers.notFound)

app.use(handlers.serverError)

app.listen(port, () => console.log(
`Express started on http://localhost:${port}; ` +
`press Ctrl-C to terminate.`))