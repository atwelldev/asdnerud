import ElementLogo from "../elements/elementLogo";
import styles from "./templateFooter.module.scss";


export default function TemplateFooter() {
    return (
        <footer className={styles.templateFooter}>
            <div className={styles.templateFooter__menu}>
                <div className={styles.templateFooter__container  + " _container"}>
                    <ul>
                        <h2>Хостинг</h2>
                        <li>Миграция серверов</li>
                        <li>Настройка стэк</li>
                        <li>Документы</li>
                        <li>Сертификация</li>
                    </ul>

                    <ul>
                        <h2>Хостинг</h2>
                        <li>Миграция серверов</li>
                        <li>Настройка стэк</li>
                        <li>Документы</li>
                        <li>Сертификация</li>
                    </ul>

                    <ul>
                        <h2>Хостинг</h2>
                        <li>Миграция серверов</li>
                        <li>Настройка стэк</li>
                        <li>Документы</li>
                        <li>Сертификация</li>
                    </ul>

                    <ul>
                        <h2>Хостинг</h2>
                        <li>Миграция серверов</li>
                        <li>Настройка стэк</li>
                        <li>Документы</li>
                        <li>Сертификация</li>
                    </ul>
                    
                    <ul>
                        <h2>Отдел продаж</h2>
                        <li>+7 (495) 115-58-08</li>
                        <h2>Поддержка</h2>
                        <li>+7 (495) 115-58-08</li>
                    </ul>
                </div>
            </div>
            <div className={styles.templateFooter__subfooter}>
                <div className={styles.templateFooter__container + " _container"}>
                    {/* <ElementLogo />     */}
                </div>
            </div>
        </footer>
    )
}