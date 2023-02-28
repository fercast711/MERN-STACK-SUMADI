import { Router } from "express";
import * as StudentsController from "../controllers/student.controllers.js";
const router = Router()

router.get('/students', StudentsController.getStudents)
router.post('/students', StudentsController.addStudents)

export default router 