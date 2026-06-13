import { Request, Response } from "express";
import { ITaskDocument } from "../model/Task";
import Task from "../model/Task";
import { error } from "node:console";

export const createTask = async ( req: Request, res: Response ): Promise<void> => {
    try {
        const task = new Task(req.body)
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: (error as Error).message });
    }
};


export const getTasks = async ( req: Request, res: Response ): Promise<void> => {
    const task = await Task.find();
    res.json(task);
};


export const updateTasks = async ( req: Request, res: Response ): Promise<void> => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!task) {
        res.status(404).json({error: 'Task do not exits'});
        return;
    }
    res.json(task);
};


export const deleteTask = async ( req: Request, res: Response ): Promise<void> => {
    const task = Task.findByIdAndDelete(req.params.id);
    if (!task) {
        res.status(404).json({error: 'Task do not exits'});
        return;
    }
    res.json({ message: 'Task deleted' });
};