import { useState, useEffect, useRef } from "react";
import styles from './Menu.module.css';

export default function Menu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  useEffect(() => {
      function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setOpen(!open);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [menuRef, open]);

  return (
    <div className={styles.menu} >
      <button className={styles.button} ref={menuRef} onClick={handleOpen}>Actions</button>
        <div>
          <ul
            className={open ? `${styles.menuButton} ${styles.open}` : styles.menuButton }
          >
            <li onClick={handleClose} className={styles.li}>One</li>
            <li onClick={handleClose} className={styles.li}>Two</li>
            <li onClick={handleClose} className={styles.li}>Three</li>
            <li onClick={handleClose} className={styles.delete}>Delete</li>
          </ul>
        </div>
    </div>
  );
}
