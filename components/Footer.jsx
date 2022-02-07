import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.mainContainer}>
            <div>
                <h1>+7 495 230 21 55</h1>
                <h1>info@lordpartners.ru</h1>
                <p>*отправляя формы на данном сайте, вы даете <br/> согласие на обработку персональных данных <br/> в соответствии с 152-ФЗ</p>
                <p>При информационном содействии</p>
            </div>
            <div className={styles.rightContainer}>
                <p>Специализируемся на случаях:</p>
                <div className={styles.list}>
                    <div>
                        <h3>Полное списание долгов</h3>
                        <h3>Частичное списание долгов</h3>
                        <h3>Реструктуризация долгов</h3>
                    </div>
                    <div>
                        <h3>Банкротство ИП</h3>
                        <h3>Списание долгов по распискам</h3>
                        <h3>Списание долгов перед государством</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;