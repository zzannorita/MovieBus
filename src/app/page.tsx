import styles from "./page.module.scss";
import Home from "./components/HomePage";

export default function Page() {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
}
