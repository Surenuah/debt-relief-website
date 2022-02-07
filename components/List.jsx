import styles from "../styles/List.module.css";
import Image from 'next/image';

const List = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.listContainer}>
                <Image src="/images/opennedBook.jpg" width="32" height="32"/>
                <h1>Опытные юристы</h1>
                <p>более 10 лет юридического стажа, более 5 лет в сфере банкротства</p>
            </div>
            <div className={styles.listContainer}>
                <Image src="/images/arch.png" width="32" height="32"/>
                <h1>Офис в центре Москвы</h1>
                <p>5 минут от станции метро «Баррикадная», 7 минут от станций Пушкинская и Арбатская</p>
            </div>
            <div className={styles.listContainer}>
                <Image src="/images/parchment.jpg" width="32" height="32"/>
                <h1>Гарантии в договоре</h1>
                <p>работаем только по договору, в котором прописываем все варианты и гарантируем результат</p>
            </div>
            <div className={styles.listContainer}>
                <Image src="/images/medal.png" width="32" height="32"/>
                <h1>На более 570 миллиардов</h1>
                <p>сохранили имущество клиентов и избавили от выплат по кредитам и займам</p>
            </div>
        </div>
    )
}

export default List;