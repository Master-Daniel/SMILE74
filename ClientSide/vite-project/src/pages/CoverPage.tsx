import { useNavigate } from 'react-router-dom';
import Component from "../assets/Component 1.png";   // adjust filename and path
import NavBar from '../components/UniversalComp/NavBar';

const CoverComp = () => {
  const navigate = useNavigate();

  const handleGoToMyTasks = () => {
    navigate('/my-tasks');
  };

  return (
    <div>
      <NavBar/>
      <div className="container mx-auto w-11/12">
        <div className="flex flex-row justify-center items-center gap-58 pt-12">
          <div className="flex flex-col justify-center items-start gap-5">
            <h2 className="font-[Poppins] font-medium text-[#292929] text-[30px] leading-[100%] tracking-normal w-120">
              Manage your Tasks on{" "}
              <span className="font-[Poppins] font-medium text-[#974FD0] text-[30px] leading-[100%] tracking-normal">
                TaskDuty
              </span>
            </h2>
            <p className="font-[Poppins] font-regular text-[#737171] text-[16px] leading-[100%] tracking-normal w-115">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.
            </p>
            <button
              type="button"
              onClick={handleGoToMyTasks}
              className="bg-[#974FD0] py-2.5 px-6.25 rounded-lg"
            >
              <p className="font-[Poppins] font-medium text-[#FAF9FB] text-[16px] leading-[100%] tracking-normal">
                Go to My Tasks
              </p>
            </button>
          </div>
          <div>
            <img className="w-[418.56px] h-[396.2px]" src={Component} alt="Component" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverComp;