import Express from 'express';
import apiRoute from '../routes/api.route';

const app = Express();

app.use(Express.json());

app.use("/api/v1", apiRoute);

export default app;