import express from 'express';
import 'dotenv/config';
import lookup from './lookup.mjs';

const PORT = process.env.PORT
const app = express();

// Handle HTTP GET queries
app.get('/', (req, res) => {
    let data = `Server listening on port ${PORT}...`;
    const playerTotal = req.query.playerTotal;
    const dealerUpcard = req.query.dealerUpcard;

    // Call lookup function to generate response
    if (typeof playerTotal !== "undefined" && typeof dealerUpcard !== "undefined") {
        data = lookup(playerTotal, dealerUpcard);
    }
    
    res.status(200).send(data);
});

app.use((error, req, res, next) => {
    res.status(500).send('500 - Server Error');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
