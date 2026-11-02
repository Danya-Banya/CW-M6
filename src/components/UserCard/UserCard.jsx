import s from "./UserCard.module.scss";
export const UserCard = (props) => {
  const { name, username, email, address } = props;
  const { firstname, lastname } = name;
  const { city } = address;
  return (
    <div className={s.card}>
      <h2 className="title">{`${firstname} ${lastname}`}</h2>
      <h3 className={s.userData}>{username}</h3>
      <h3 className={s.userData}>{email}</h3>
      <h3 className={s.userData}>{city}</h3>
    </div>
  );
};
