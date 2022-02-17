const { response } = require('express')
const express = require('express')
const req = require('express/lib/request')
const { get } = require('express/lib/response')

const app = express()

app.use(express.json())

const books = [
    {title: 'java programming', id: 1},
    {title: 'hindi', id: 2},
    {title: 'english', id: 3},
]

app.get('/',(req, resp)=>{
    resp.send('Welcome to study REST api with nie js')

})
app.get('/api/books',(req,resp)=>{
    resp.send(books)
})

app.get('/api/books/:title',(req,resp)=>{
    console.log(req.params)
    resp.send(req.params);
})

app.listen(8080)
