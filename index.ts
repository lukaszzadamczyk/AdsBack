import express, {json} from 'express';
import cors from 'cors';
import 'express-async-errors';
import rateLimit from "express-rate-limit";
import {handleError, ValidationError} from "./utils/errors";

const app = express();

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
})

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(json());
app.use(limiter);

app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening http://localhost:3001');
})