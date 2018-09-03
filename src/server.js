const Express = require('express')
const app = new Express()

const port = 3000

app.get('/', (req, res) => {
    res.send('random answer')
})

app.listen(port, () => {
    console.log('Application is running on httl://localhost:' + port)
})