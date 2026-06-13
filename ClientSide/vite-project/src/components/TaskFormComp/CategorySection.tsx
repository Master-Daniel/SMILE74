import React from 'react';
import type { Task } from '../../types';
import TaskCard from './TaskCard';

interface CategorySection {
  title: string;
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string, completed: boolean) => void;
}

const CategorySection: React.FC<CategorySection> = ({
  tasks,
  onEdit,
  onDelete,
  onToggleComplete,
}) => {
    console.log(tasks);
    
  if (tasks.length === 0) return null;

  return (
    <div className="mb-10">
      
      <div className="flex flex-col justify-center items-start gap-6">
        {tasks.map(task => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;