import { UserCard } from "../UserCard";
import { useUsers } from "./UsersList.api";
import { NavLink } from "react-router-dom";
import s from "./UsersList.module.scss";
export const UsersList = () => {
  const { data: users } = useUsers();
  return (
    <div className="list">
      {users?.map((user) => (
        <NavLink className={s.card} to={`/users/${user.id}`}>
          <UserCard key={user.id} {...user} />
        </NavLink>
      ))}
    </div>
  );
};
