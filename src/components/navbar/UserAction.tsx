import { Link } from "react-router-dom";

const UserAction = () => {
  return (
    <div className="flex items-center gap-x-1">
      <button className="user-action__btn">
        <Link to="/auth/login">Login</Link>
      </button>
      <button className="user-action__btn">
        <Link to="/profile">Profile</Link>
      </button>
    </div>
  );
};

export default UserAction;
