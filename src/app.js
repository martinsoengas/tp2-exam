import connection from './config/connection.js';
import seeder from './helpers/seeder.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config({ path: '../example.env' });

// Router Imports
import usersRouter from './routes/users.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));
app.use(morgan('dev'));

// Routes
app.use('/users', usersRouter);

app.use('/', async (_req, res) => {
  res.status(200).send({
    status: '🟢 System operational',
  });
});

// DB
await connection.sync({ force: false });
await seeder();

// Server
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
