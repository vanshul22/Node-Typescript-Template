// src/app.ts
import express from 'express';
import { UserRoutes } from './routes/UserRoutes';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/users', UserRoutes);

app.get('/', (req, res) => {
    res.send('Server running!');
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});

export { app };