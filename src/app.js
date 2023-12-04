import connection from './config/connection.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config({ path: '../example.env' });

// Router Imports
import votosRouter from './routes/votos.routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({}));
app.use(morgan('dev'));

// Routes
app.use('/votos', votosRouter);

// DB
await connection.sync({ force: false });

// Server
const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
