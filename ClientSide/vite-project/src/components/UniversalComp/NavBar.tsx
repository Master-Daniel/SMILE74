import { useNavigate } from 'react-router-dom';
import Group from '../../assets/Group 1.png';
import Ellipse from '../../assets/Ellipse 1.png';

const NavBar = () => {
  const navigate = useNavigate();

  const handleNewTask = () => {
    navigate('/new-task');
  };

  const handleAllTasks = () => {
    navigate('/my-tasks');
  };

  return (
    <div className='h-23.25 border-b-[0.5px] border-[#B8B6B6] '>
      <div className='container mx-auto w-11/12 '>
        <div className='flex flex-row justify-between items-center pt-3'>
          <div className='flex flex-row justify-center items-center gap-2'>
            <img className='w-[39.91px] h-[39.91] ' src={Group} alt="" />
            <p className='font-[Poppins] font-bold text-[#2D0050] text-[28px] leading-[100%] tracking-normal '>
              TaskDuty
            </p>
          </div>

          <div className='flex flex-row justify-center items-center gap-5'>
            <button
              onClick={handleNewTask}
              className='font-[Poppins] font-medium text-[#292929] text-[18px] leading-[100%] tracking-normal'
            >
              New Task
            </button>
            <button
              onClick={handleAllTasks}
              className='font-[Poppins] font-medium text-[#292929] text-[18px] leading-[100%] tracking-normal'
            >
              All Tasks
            </button>

            <img
              className='w-15 h-15 border-[3px] border-[#292929] rounded-full'
              src={Ellipse}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;