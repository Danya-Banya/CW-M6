import { NavLink } from "react-router-dom";

import s from "./MainPage.module.scss";
export const MainPage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Добро пожаловать на сайт с пользователями</h1>
      <p className={s.description}>
        Здесь собрана актуальная база аккаунтов со всей необходимой информацией.
        При помощи нажатия на панель пользователя вы можете рассмотреть данные
        подробнее
      </p>
      <NavLink className={s.toUsers} to={"/users"}>
        <div className={s.MainButton}>
          <h3>К пользователям</h3>
        </div>
      </NavLink>
    </div>
  );
};
