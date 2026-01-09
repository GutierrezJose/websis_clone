import express from 'express';
import 'dotenv/config';
import UserRoutes from './routes/UserRoutes';
import RoleRoutes from './routes/RoleRoutes';
import FacultyRoutes from './routes/FacultyRoutes';
import CareerRoutes from './routes/CareerRoutes';
import StudentEnrollmentRoutes from './routes/StudentEnrollmentCareer';
import SubjectRoutes from './routes/SubjectRoutes';
import CareerSubject from './routes/CareerSubjectRoutes';
import GroupRoutes from './routes/GroupRoutes';
import ClassScheduleRoutes from './routes/ClassScheduleRoutes';
import AuthenticationRoutes from './routes/AuthenticationRoutes';
import GroupClassScheduleRoutes from './routes/GroupClassScheduleRoutes'; 
import { authMiddleware } from './middlewares/authMiddleware';
import { adminMiddleware } from './middlewares/adminMiddleware';

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use('/websis/api/auth', AuthenticationRoutes);

app.use(authMiddleware);
app.use('/websis/api', adminMiddleware ,UserRoutes);
app.use('/websis/api', adminMiddleware, RoleRoutes);
app.use('/websis/api', adminMiddleware, FacultyRoutes)
app.use('/websis/api', adminMiddleware, CareerRoutes);
app.use('/websis/api', adminMiddleware, StudentEnrollmentRoutes);
app.use('/websis/api', adminMiddleware, SubjectRoutes);
app.use('/websis/api', adminMiddleware, CareerSubject);
app.use('/websis/api', adminMiddleware, GroupRoutes);
app.use('/websis/api', adminMiddleware, ClassScheduleRoutes);
app.use('/websis/api', adminMiddleware, GroupClassScheduleRoutes);
app.listen(PORT, () => {
    console.log(`Server is running` );
} )
