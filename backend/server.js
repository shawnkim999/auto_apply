const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/api', (req, res) => {
    res.json({'users': ['userone', 'usertwo', 'userthree']})
})

app.listen(5000, () => {console.log('server started on port 5000')})