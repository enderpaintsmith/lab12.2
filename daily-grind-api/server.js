import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
 
const __dirname = path.dirname(fileURLToPath(import.meta.url));
 
const app = express();
const port = 3000;
const FUN_FACT_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random';
 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
 
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});
 
// Extra (not part of the lab): random fun fact from an external API
app.get('/api/fun-fact', async (req, res) => {
    try {
        const response = await fetch(FUN_FACT_URL);
        if (!response.ok) {
            throw new Error(`External API responded with status ${response.status}`);
        }
 
        const funFact = await response.json();
 
        res.json({ fact: funFact.text });
    } catch (error) {
        res.status(500).json({ error: 'Could not fetch fun fact' });
    }
});
 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 