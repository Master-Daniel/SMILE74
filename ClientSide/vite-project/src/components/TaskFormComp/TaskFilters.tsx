import React from 'react';

interface Filters {
  category: string;      
  completion: string;    
}

interface TaskFiltersProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

const TaskFilters: React.FC<TaskFiltersProps> = ({ filters, onFilterChange }) => {
  const handleChange = (key: keyof Filters, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6 bg-[#FFFFFF] p-4 rounded-xl shadow-sm">
      <div className="flex items-center gap-2">
        <label className="font-[Poppins] font-medium text-[#374151]">Category:</label>
        <select
          value={filters.category}
          onChange={(e) => handleChange('category', e.target.value)}
          className="border border-[#D1D5DB] rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-[#2DD4BF]"
        >
          <option value="All">All</option>
          <option value="Urgent">Urgent</option>
          <option value="Important">Important</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label className="font-medium text-gray-700">Status:</label>
        <select
          value={filters.completion}
          onChange={(e) => handleChange('completion', e.target.value)}
          className="border border-[#D1D5DB] rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-[#2dd4bf]"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilters;