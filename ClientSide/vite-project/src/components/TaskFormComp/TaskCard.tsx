import React from 'react';
import type { Task } from '../../types';
import deleteIcon from "../../assets/deleteIcon.png";
import clarity from '../../assets/clarity.png';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string, completed: boolean) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const isOverdue = !task.completed && new Date(task.dueDate) < new Date();

  // Category colors – keys are capitalized (for display), but we'll handle input case
  const categoryColors: Record<string, string> = {
    Urgent: 'bg-[#FEE2E2] text-[#B91C1C]',
    Important: 'bg-[#FFEDD5] text-[#c2410c]',
    Work: 'bg-[#CCFBF1] text-[#0F766E]',
    Personal: 'bg-[#FEF9C3] text-[yellow-700]',
  };

  // Capitalize first letter of category (e.g., "work" → "Work") for color lookup
  const categoryKey = task.category.charAt(0).toUpperCase() + task.category.slice(1);
  const badgeColor = categoryColors[categoryKey] || 'bg-gray-100 text-gray-700';

  return (
    <div className='container mx-auto w-11/12'>
      <div className={`bg-[#FFFFFF] rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-200 border ${task.completed ? 'opacity-75 bg-[#F9FAFB]' : ''}`}>
        <div className="flex justify-between items-start mb-3">
        
          <span className={`text-xs px-3 py-1 rounded-full font-[Poppins] font-semibold ${badgeColor}`}>
            {categoryKey}
          </span>
        </div>
        <div className='border-b border-[#6B7280] mb-2'>
          <p className="text-[#4B5563] font-[Poppins] font-semibold text-sm mb-3">
            {task.description || 'No description'}
          </p>
          <p className="text-xs text-[#6B7280] mb-4">
            Due: {new Date(task.dueDate).toDateString()}
            {isOverdue && <span className="text-[#EF4444] ml-2 font-[Poppins] font-semibold">(Overdue)</span>}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center">
          <span>
            <button
            onClick={() => onToggleComplete(task._id, !task.completed)}
            className="font-[Poppins] font-medium text-xs bg-[#F3F4F6] hover:bg-[#DCFCE7] px-3 py-1.5 rounded-full transition"
          >
            {task.completed ? ' Done' : ' Mark Done'}
          </button>
          </span>
          <span className='flex gap-2'>
            <button
            onClick={() => onEdit(task)}
            className="bg-[#974FD0] hover:bg-[#eab308] px-3 py-1.5 rounded-lg flex flex-row justify-center items-center gap-1"
          >
            <img className='w-3 h-3' src={clarity} alt="" />
            <p className='font-[Poppins] text-[#FFFFFF] text-xs'>Edit</p>
          </button>
          <button
            onClick={() => onDelete(task._id)}
            className="bg-[#F3F4F6] hover:bg-[#FEE2E2] px-3 py-1.5 rounded-lg flex flex-row justify-center items-center gap-2"
          >
            <img className='w-3 h-3' src={deleteIcon} alt="" />
            <p className='font-[Poppins] text-[#974FD0] text-xs'>Delete</p>
          </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;