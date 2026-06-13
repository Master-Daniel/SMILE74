
export interface ITask {
    title: string;
    description: string;
    dueDate: Date;
    category: 'work' | 'personal' | 'urgent';
    completed: boolean
}