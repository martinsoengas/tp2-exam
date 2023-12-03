import connection from './config/connection.js';
import seeder from './helpers/seeder.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

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

// DB Seeder
await seeder();

// Server
await connection.sync({ force: false });

const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
