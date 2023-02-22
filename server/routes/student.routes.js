import { Router } from "express";
import { getStudents, addStudents } from "../controllers/student.controllers.js";
const router = Router()

router.get('/students', getStudents)
router.post('/students', addStudents)

export default router 