import { useState } from 'react';
import type { Task, TaskInput } from '../types';
import { createTask, updateTask } from '../services/api';

export const useTaskManager = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [showForm, setShowForm] = useState(false);

  const refreshTasks = () => setRefreshTrigger(prev => prev + 1);

  const handleSubmit = async (taskData: TaskInput) => {
    if (editingTask) {
      await updateTask(editingTask._id, taskData);
      setEditingTask(null);
    } else {
      await createTask(taskData);
    }
    refreshTasks();
    setShowForm(false);
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingTask(null);
  };

  const openCreateForm = () => {
    setEditingTask(null);
    setShowForm(true);
  };

  return {
    tasksRefreshTrigger: refreshTrigger,
    editingTask,
    showForm,
    handleSubmit,
    handleEdit,
    closeForm,
    openCreateForm,
  };
};