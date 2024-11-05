import { MdCheckCircle, MdOutlineLogout } from "react-icons/md";
import { BsGear } from "react-icons/bs";
import { FaTrash, FaCheckDouble, FaClock } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="py-4 px-5 flex flex-col md:items-start justify-between w-full h-full  items-center">
      <ul className="flex flex-col justify-start  items-center md:items-start gap-8 md:gap-5 w-full">
        <button className="flex items-center justify-between w-full">
          <span className="hidden md:block flex-1 text-start">Todos</span>
          <MdCheckCircle size={20} />
        </button>

        <button className="flex items-center justify-between w-full">
          <span className="hidden md:block flex-1 text-start">
            Deleted Todos
          </span>
          <FaTrash size={20} />
        </button>
        <button className="flex items-center justify-between w-full">
          <span className="hidden md:block flex-1 text-start">
            Completed Todos
          </span>
          <FaCheckDouble size={20} />
        </button>
        <button className="flex items-center justify-between w-full">
          <span className="hidden md:block flex-1 text-start">Reminders</span>
          <FaClock size={20} />
        </button>
      </ul>

      <div className="flex flex-col h-fit gap-4 w-full">
        <button className="flex items-center w-full justify-between">
          <span>LogOut</span>
          <MdOutlineLogout size={20} />
        </button>
        <button className="flex items-center w-full justify-between">
          <span>Setting</span>
          <BsGear size={20} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
