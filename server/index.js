console.log('hello world')
const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')

app.use(cors())
let notes = [
    
  ]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
    let note = request.body
  console.log(note)
  response.json(note)
})
app.post('/api/notes', (request, response) => {
    const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id)) 
    : 0

  const note = request.body
  note.id = maxId + 1
  notes = notes.concat(note)
  console.log(notes)
  response.json(notes)
})
const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})