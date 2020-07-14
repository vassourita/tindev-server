import 'reflect-metadata';

import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import morgan from 'morgan';

import '@shared/infra/typeorm';
import '@shared/container';
import ApplicationError from '@shared/errors/ApplicationError';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/v1', routes);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof ApplicationError) {
    response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
    return;
  }

  console.log(err);
  response.status(500).json({
    status: 'error',
    message: 'An unexpected error has occurred',
  });
});

const port = process.env.PORT || 3333;
app.listen(port);
