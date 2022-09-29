const express = require('express');
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;
const path = require('path');

const dbConnect = require('./dbConnect');
const userRoute = require('./routes/userRoute');

if (process.env.NODE_ENV !== 'production') {
    app.use('/', express.static('client/build'));
    app.get('', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/html'));
    });
}

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use('/api/user/', userRoute);
