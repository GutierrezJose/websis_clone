import express from 'express';
import 'dotenv/config';
import UserRoutes from './routes/UserRoutes';
import AuthenticationRoutes from './routes/AuthenticationRoutes';

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use('/websis/api', UserRoutes);
app.use('/websis/api/auth', AuthenticationRoutes);
app.listen(PORT, () => {
    console.log(`Server is running` );
} )
