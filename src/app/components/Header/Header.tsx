import styles from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <h3 className={styles.logo}>🎬 무비버스</h3>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
      </nav>
    </header>
  );
}
