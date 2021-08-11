import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
const app = express();




// middleware
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());



console.log("yo");


app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.get('/status', (req: any, res: any) => {
    res.send({
        message: 'hello everyone'
    })
});


app.post('/register', (req: Record<string, any>, res: any) => {
    res.send({
        message: `Hello ${req.body.email} your user was registred`
    })
});




app.listen(process.env.PORT || 8000);