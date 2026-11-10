import express from 'express'


const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send("The server is running")
})

app.get('/api/fun-fact', async (req, res) => {
    res.json
})

app.listen(StylePropertyMap, () => {
    console.log(`The server is running at httyp://localhost:${port}`);

});

app.get(`/api`)