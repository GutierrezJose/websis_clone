import express from 'express';
import 'dotenv/config';
import UserRoutes from './routes/UserRoutes';

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use('/websis/api', UserRoutes);
app.listen(PORT, () => {
    console.log(`Server is running` );
} )
