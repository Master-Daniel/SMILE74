import React, { useEffect, useState } from 'react';
import type { Task } from '../../types';
import { fetchTasks, updateTask, deleteTask } from '../../services/api';
import CategorySection from './CategorySection';
import TaskFilters from './TaskFilters';

interface TaskList {
  refreshTrigger: number;
  onEditTask: (task: Task) => void;
}

const TaskList: React.FC<TaskList> = ({ refreshTrigger, onEditTask }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ category: 'All', completion: 'All' });

  const loadTasks = async () => {
    setLoading(true);
    const data = await fetchTasks();
    setTasks(data);
    setLoading(false);
  };

  useEffect(() => {
    loadTasks();
  }, [refreshTrigger]);

  // Apply filters
  useEffect(() => {
    let filtered = [...tasks];
    if (filters.category !== 'All') {
      filtered = filtered.filter(t => t.category === filters.category);
    }
    if (filters.completion === 'Completed') {
      filtered = filtered.filter(t => t.completed === true);
    } else if (filters.completion === 'Pending') {
      filtered = filtered.filter(t => t.completed === false);
    }
    setFilteredTasks(filtered);
  }, [tasks, filters]);

  const handleToggleComplete = async (id: string, completed: boolean) => {
    await updateTask(id, { completed });
    loadTasks();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this task?')) {
      await deleteTask(id);
      loadTasks();
    }
  };

  if (loading) return <div className="text-center text-[#115E59] font-[Poppins] font-semibold mt-10">Loading tasks...</div>;

  // Group filtered tasks by category
  const categoryOrder = ['Urgent', 'Important', 'Work', 'Personal'];
  const grouped = categoryOrder.reduce((acc, cat) => {
    acc[cat] = filteredTasks.filter(t => t.category === cat);
    return acc;
  }, {} as Record<string, Task[]>);

  return (
    <div>
      <TaskFilters filters={filters} onFilterChange={setFilters} />
      {filteredTasks.length === 0 ? (
        <p className="text-center text-[#6B7280] font-[Poppins] font-semibold mt-10">No tasks match the filters.</p>
      ) : (
        categoryOrder.map(cat => (
          <CategorySection
            key={cat}
            title={cat}
            tasks={grouped[cat]}
            onEdit={onEditTask}
            onDelete={handleDelete}
            onToggleComplete={handleToggleComplete}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;