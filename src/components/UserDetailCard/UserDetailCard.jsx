import { NavLink } from "react-router-dom";
import s from "./UserDetailCard.module.scss";
import { useUserDetails } from "./UserDetailCard.api";
export const UserDetailCard = ({ slug }) => {
  const { data, isError, isPending, error } = useUserDetails(slug);

  if (isPending) {
    return <div>Загрузка...</div>;
  }
  if (isError) {
    return <div>Ошибка при получении данных пользователя: {error}</div>;
  }
  const { name, username, email, address, phone } = data;
  const { city } = address;
  const { firstname, lastname } = name;

  return (
    <div className={s.card}>
      <h1 className="title">{`${firstname} ${lastname}`}</h1>
      <h2 className={s.userData}>Username: {username}</h2>
      <h2 className={s.userData}>Email: {email}</h2>
      <h2 className={s.userData}>City: {city}</h2>
      <h2 className={s.userData}>Phone: {phone}</h2>
      <NavLink className={s.linkBack} to={-1}>
        Назад
      </NavLink>
    </div>
  );
};
