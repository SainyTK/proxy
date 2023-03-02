const express = require("express");
const axios = require("axios");
const cors = require("cors");

const port = process.env.PORT || 4040;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.post('', async (req, res) => {
    const { method, url, body } = req.body;

    try {
        const result = await axios({
            method,
            url,
            body
        })
        return res.status(200).send(result.data);
    } catch (e) {
        console.error(e);
        return res.status(400).send(e);
    }
})

app.listen(port, () => {
    console.log(`Proxy server is ready on port ${port}`)
})