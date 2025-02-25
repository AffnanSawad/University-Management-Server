import express from 'express'
import { studentControllers } from './student.controller';

//  Calling router
const router = express.Router() ;

//  CRUD Operations;
// will call controller func:
router.post('/create-student', studentControllers.CreateStudent); 

// get student data
router.get('/', studentControllers.getAllStudents);

// export
export const StudentRoutes = router ;