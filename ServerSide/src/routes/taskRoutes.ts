import { Router } from "express";
import { createTask, getTasks, updateTasks, deleteTask } from "../controllers/taskControllers";


const router = Router();

router.post('/', createTask);
router.get('/', getTasks);
router.put('/:id', updateTasks);
router.delete('/:id', deleteTask);


export default router;