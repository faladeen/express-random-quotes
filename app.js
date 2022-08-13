const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.json({
                'success': true,
                'message': 'Hello World'
            })
})


app.listen(port, () =>{
    console.log(`App running on port ${port}`)
})
