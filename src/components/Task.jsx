import styles from "@/styles/modules/task.module.scss";

const Task = ({ title, status, difficulty }) => {
  const dotsColor = {
    first:
      difficulty === "easy"
        ? "#8AC926"
        : difficulty === "medium"
        ? "#FBB02D"
        : "#BD1E1E",
    second:
      difficulty === "easy"
        ? "#4e5252"
        : difficulty === "medium"
        ? "#FBB02D"
        : "#BD1E1E",
    third: difficulty === "hard" ? "#BD1E1E" : "#4e5252",
  };

  return (
    <li className={styles.task}>
      <div className={styles.task__title__wrapper}>
        <div className={styles.task__checkbox}></div>
        <h3 className={styles.task__title}>{title}</h3>
      </div>
      <div className={styles.task__difficulty__wrapper}>
        <p className={styles.task__difficulty__text}>Сложность</p>
        <div className={styles.task__difficulty__dots}>
          <div
            className={styles.task__difficulty__dots__dot}
            style={{ backgroundColor: dotsColor.first }}
          />
          <div
            className={styles.task__difficulty__dots__dot}
            style={{ backgroundColor: dotsColor.second }}
          />
          <div
            className={styles.task__difficulty__dots__dot}
            style={{ backgroundColor: dotsColor.third }}
          />
        </div>
      </div>
    </li>
  );
};

export default Task;
