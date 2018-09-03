const Express = require('express')
const path = require('path')
const fs = require('fs')

const app = new Express()
const port = 3000

app.get('/', (req, res) => {
    const pathToHtml = path.resolve(__dirname, '../dist/hello-world.html')
    const contentOfHtmlFile = fs.readFileSync(pathToHtml, 'utf-8')

    res.send(contentOfHtmlFile)
})

app.use('/static', Express.static(path.resolve(__dirname, '../dist')))

app.listen(port, () => {
    console.log('Application is running on httl://localhost:' + port)
})