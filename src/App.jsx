import styles from "@/styles/modules/app.module.scss";
import Sidebar from "@/components/Sidebar";
const App = () => {
  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.page}></div>
    </main>
  );
};

export default App;
