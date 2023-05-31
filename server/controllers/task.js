import Task from '../models/taskdata.js';
import express from 'express';
const router = express.Router();

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createTask = async (req, res) => {
    const body = req.body;
    
    const newTask = await new Task(body);
    console.log(newTask);
    newTask.save()
        .then(() => res.json(newTask))
        .catch((err) => res.status(400).json('Error: ' + err));

}

export const updateTask = (req, res) => {
    Task.findById(req.params.id)
        .then((task) => {
            task.description = req.body.description;
            task.completed = req.body.completed;

            task.save()
                .then(() => res.json('Task updated!'))
                .catch((err) => res.status(400).json('Error: ' + err));
        })
        .catch((err) => res.status(400).json('Error: ' + err));
}

export const deleteTask = (req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted.'))
        .catch((err) => res.status(400).json('Error: ' + err));
}

export default router;
