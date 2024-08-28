import express from 'express';
import cors from 'cors';
import barRoute from './routes/bar.route';

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use('/bar', barRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

