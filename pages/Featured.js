import styles from "../styles/Featured.module.css";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const Featured = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <h3 className={styles.titleGray}>Списание долгов на основании ФЗ№ 127 «О нестостоятельности (банкротстве)»</h3>
                <h1 className={styles.mainTitle}>Спишем ваши долги</h1>
                <h2 className={styles.titleWhite}>Пройдите тест и получите:</h2>
                <ul className={styles.listContainer}>
                    <li className={styles.listItem}>Варианты списания вашего долга</li>
                    <li className={styles.listItem}>Консультация юриста по списанию долгов</li>
                    <li className={styles.listItem}>Сроки и стоимость списания</li>
                    <li className={styles.listItem}>Список необходимых документов для начала процедуры</li>
                </ul>
                <button className={styles.btn}>
                    <Link href="/TotalAmount">Получить варианты списания</Link>
                </button>
            </div>
            <div className={styles.rightContainer}>
                <Image src="/images/Woman.png" width="445" height="542"/>
            </div>
        </div>
    )
}

export default Featured;