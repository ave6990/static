import express from 'express'
import path from 'path'

const app = express()

app.use(express.static('./public'))

app.get('/gs2000', (req, res) => {
    res.sendFile('gs2000.html', { root: './public/gs2000/', } )
} )

app.get('/architect', (req, res) => {
    res.sendFile('home3d.html', { root: './public/architect/', } )
} )

app.get('/test', (req, res) => {
    res.sendFile('test.html', { root: './public/test/', } )
} )

app.get('/arshin', (req, res) => {
    res.sendFile('arshin.html', { root: './public/arshin/', } )
} )

app.listen(3000, () => {
    console.log('Server started on port 3000')
} )
