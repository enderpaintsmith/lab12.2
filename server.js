import express from 'express'


const app = express()
const port = 3000
const Fun_Fact_RUL = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

app.get('/', (req, res) => {
    res.send("The server is running")
});

app.get('/api/fun-fact', async (req, res) => {
    try{
    const response = await fetch(Fun_Fact_URL);
    if (!response.ok) {
        throw new Error(`External API responded with status ${response.status}`);

    }
    
    const funFact = await response.json();

    res.json({ fact: funFact.text });
} catch (error) {
    res.status(500).json({error: could not fetch fun fact})
}
});

app.listen(port, () => {
    console.log(`The server is running at httyp://localhost:${port}`);

});

app.get(`/api`)