// import axios from 'axios';
// import type { Task, TaskInput } from '../types';

// // Use environment variable or fallback to localhost
// const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// const api = axios.create({
//   baseURL: API_BASE,
//   headers: { 'Content-Type': 'application/json' },
// });

// export const fetchTasks = async (): Promise<Task[]> => {
//   const response = await api.get('/tasks');
//   return response.data;
// };

// export const createTask = async (task: TaskInput): Promise<Task> => {
//   const response = await api.post('/tasks', task);
//   return response.data;
// };

// export const updateTask = async (id: string, updates: Partial<TaskInput>): Promise<Task> => {
//   const response = await api.put(`/tasks/${id}`, updates);
//   return response.data;
// };

// export const deleteTask = async (id: string): Promise<void> => {
//   await api.delete(`/tasks/${id}`);
// };




import axios from 'axios';
import type { Task, TaskInput } from '../types';


const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4040/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await api.get('/tasks');
  return response.data;
};

export const createTask = async (task: TaskInput): Promise<Task> => {
  const response = await api.post('/tasks', task);
  return response.data;
};

export const updateTask = async (id: string, updates: Partial<TaskInput>): Promise<Task> => {
  const response = await api.put(`/tasks/${id}`, updates);
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await api.delete(`/tasks/${id}`);
};