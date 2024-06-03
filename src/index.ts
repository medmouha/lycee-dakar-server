import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { EleveRoutes } from './routers/eleveRouter';
import { ClasseRoutes } from './routers/classeRouter';


require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
mongoose.connect(process.env.DB_URI as string)
    .then(() => console.log('Connected to DB lyceedakar'))
    .catch((err: any) => console.log(err));


const corsOptions = {
    origin: 'http://localhost:4200', // Adjust to your Angular app's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials if needed
    optionsSuccessStatus: 204 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

const eleveRouter = new EleveRoutes;
const classeRouter = new ClasseRoutes;

app.use('/eleves',eleveRouter.router);
app.use('/classes',classeRouter.router);

app.listen(port, () => console.log(`Server running on port ${port}`));

