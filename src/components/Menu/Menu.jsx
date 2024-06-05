import { useState } from "react"
import styles from './Menu.module.css'
export default function Menu() {
  const [open, setOpen] = useState(false)
  function handleOpen(){
      setOpen(!open)
    }

  return (
    <div className={styles.menu}>
      <button className={styles.button} onClick={handleOpen}>Actions</button>
      {open && <div>
        <ul className={styles.menuButton} id="menuButton">
          <li onClick={handleOpen} className={styles.li}>One</li>
          <li onClick={handleOpen} className={styles.li}>Two</li>
          <li onClick={handleOpen} className={styles.li}>Three</li>
          <li onClick={handleOpen}  className={styles.delete}>Delete</li>
        </ul>
      </div>}
      </div>
  );
}

