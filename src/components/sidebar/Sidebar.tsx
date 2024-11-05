import { MdOutlineLogout } from "react-icons/md";
import { BsGear } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="py-4 px-5 flex flex-col items-start justify-between w-full h-full">
      <ul className="flex flex-col justify-start items-start gap-4 flex-1">
        <button>Todos</button>
        <button>Deleted Todos</button>
        <button>Completed Todos</button>
        <button>Reminders</button>
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
