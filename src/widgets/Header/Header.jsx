import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={s.header}>
      <h2 className="title">Typicode users</h2>
      <ul className={s.nav}>
        <NavLink className="link" to={"/"}>На главную</NavLink>
        <NavLink className="link" to={"https://github.com/Danya-Banya/CW-M6"}>О проекте</NavLink>
      </ul>
    </header>
  );
};
