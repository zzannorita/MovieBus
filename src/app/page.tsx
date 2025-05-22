import styles from "./page.module.scss";
import Home from "./components/Home/HomePage";

export default function Page() {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
}
