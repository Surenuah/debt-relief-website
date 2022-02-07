import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Featured from "./Featured";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>LORD</title>
                <meta name="description" content="Уверенность, оправданная опытом" />
            </Head>
            <Featured />
        </div>
    )
}
