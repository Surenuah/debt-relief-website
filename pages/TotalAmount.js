import styles from "../styles/TotalAmount.module.css";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const TotalAmount = () => {
    const [ticks, setTicks] = useState([]);
    const handleClick = () => {

    };
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftContainer}>
                <h1 className={styles.title}>Укажите общую сумму ваших долгов</h1>
                <div className={styles.inputs}>
                    <div className={styles.labels}>
                        <input type="checkbox" className={styles.checkboxRound} />
                        <label htmlFor="" className={styles.label}>Менее 500 000 рублей</label>
                    </div>
                    <div className={styles.labels}>
                        <input type="checkbox" className={styles.checkboxRound} />
                        <label htmlFor="" className={styles.label}>от 500 000 до 1 000 000 рублей</label>
                    </div>
                    <div className={styles.labels}>
                        <input type="checkbox" className={styles.checkboxRound} />
                        <label htmlFor="" className={styles.label}>от 1 000 000 до 5 000 000 рублей</label>
                    </div>
                    <div className={styles.labels}>
                        <input type="checkbox" className={styles.checkboxRound} />
                        <label htmlFor="" className={styles.label}>более 5 000 000 рублей</label>
                    </div>
                </div>
                <button className={styles.button} onClick={() => handleClick}>
                    <Link href="/Property">Далее</Link>
                    <Image src="/images/direction.png" width='15' height='12' className={styles.img}/>
                </button>
            </div>
            <div className={styles.rightContainer}>
                <Image src="/images/Woman.png" width="445" height="542"/>
            </div>
        </div>
    )
}

export default TotalAmount;