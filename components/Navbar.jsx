import styles from "../styles/Navbar.module.css";
import Image from 'next/image';
import {useState} from "react";

const Navbar = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <Image src='/images/Vector.png' alt='' width='45' height='45'/>
                <Image src='/images/Logo.png' alt='' width='65' height='25' />
                <div className={styles.verticalLine}></div>
                <p className={styles.confidentTitle}>уверенность, <br/> оправданная опытом</p>
            </div>
            <div className={styles.rightContainer}>
                <p className={styles.title}>Позвоните сейчас</p>
                <h1 className={styles.telephoneTitle}>8 495 230 21 55</h1>
            </div>
            <button className={styles.btn}>Записаться на консультацию <br/> юриста</button>
        </div>
    )
}

export default Navbar;