import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

console.log("yo");

app.get('/status', (req: any, res: any) => {
    res.send({
        message: 'hello everyone'
    })
});

app.listen(process.env.PORT || 8081)