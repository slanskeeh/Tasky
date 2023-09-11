import styles from "@/styles/modules/sidebar.module.scss";

import Task from "./Task";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__title__wrapper}>
        <h1 className={styles.sidebar__title}>Tasky</h1>
      </div>
      <ul className={styles.sidebar__list}>
        <Task title={"Новая задача"} status={false} difficulty={"easy"} />
        <Task title={"Новая задача 2"} status={false} difficulty={"medium"} />
        <Task title={"Новая задача 3"} status={false} difficulty={"hard"} />
      </ul>
      <div className={styles.sidebar__contacts}></div>
    </div>
  );
};

export default Sidebar;
