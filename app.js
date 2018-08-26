const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const listings = require('./listings');

const port = process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (request, response, next) => {
    response.json({listings});
})

app.listen(port, () => {
    console.log(`I'm listening on ${port}`);
})