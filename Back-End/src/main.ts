import express from 'express';
import barRoute from './routes/bar.route';

const app = express();
const port = 3000;
app.use(express.json());

app.use('/bar', barRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
