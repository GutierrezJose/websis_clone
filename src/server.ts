import express from 'express';
import 'dotenv/config';
import UserRoutes from './routes/UserRoutes';
import AuthenticationRoutes from './routes/AuthenticationRoutes';
import { authMiddleware } from './middlewares/authMiddleware';
import { adminMiddleware } from './middlewares/adminMiddleware';

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use('/websis/api/auth', AuthenticationRoutes);

app.use(authMiddleware);
app.use('/websis/api', adminMiddleware ,UserRoutes);
app.listen(PORT, () => {
    console.log(`Server is running` );
} )
