import express from 'express';
import mongoose from 'mongoose';

import Data from './data.js';
import Videos from './dbModel.js';


// app config
const app = express();
const port = process.env.PORT || 8000;

//middlewares
app.use(express.json());
//cors header

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
        res.setHeader('Access-Control-Allow-Headers', '*'),
        next();
})

//DB config
const connection_url = 'mongodb+srv://admin:lPz9Tvl4e94knt8h@cluster0.i7xkr.mongodb.net/TikTok?retryWrites=true&w=majority'

mongoose.connect(connection_url)
//new mongoose not needed anymore
/*useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true */

//api endpoints
app.get('/', (req, res) => res.status(200).send('hello there'));
app.get('/v1/posts', (req, res) => res.status(200).send(Data));

app.get('/v2/posts', (req, res) => {
    Videos.find({}, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

app.post('/v2/posts', (req, res) => {
    const dbVideos = req.body

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})

app.delete('/v2/posts/:id', async (req, res) => {
    const { id } = req.params;
    await Videos.findByIdAndDelete(id);
    res.send(id);
})

//listen
app.listen(port, () => console.log(`listening on localhost:${port}`));

