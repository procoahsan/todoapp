import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
      },
      completed: {
        type: Boolean,
        default: false
      }
    }, {
      timestamps: {
        createdAt: 'creationTime',
        updatedAt: 'completionTime'
      }
    
});

const Task = mongoose.model('Task', taskSchema);

export default Task;