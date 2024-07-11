import styles from "./popupOrder.module.scss";

import Typed from 'react-typed';

import { useSelector, useDispatch } from "react-redux";
import { setActivePopup } from "@/store/popupSlice";

export default function PopupOrder() {

    const dispatch = useDispatch();
    const popupActive = useSelector((state: any) => state.popup.popupActive);
    const popupText = useSelector((state: any) => state.popup.orderText);

    return (
    <div className={ styles.popupOrder  + (popupActive ? ` ${styles._active}` : "" )}>
      <div className={styles.popup__background  + (popupActive ? ` ${styles._active}` : "" )} onClick={ () => { dispatch(setActivePopup('false')) }  }></div>
      <section className={styles.popup}>
            <div className={"_cross"} onClick={ () => { dispatch(setActivePopup('false')) }  }></div>
            <form action="">

                <ul>
                    <li>
                        <input type="tel" placeholder="+7 977 591 82 92"/>
                        <input type="email" placeholder="gm.dat.well@gmail.com"/>
                    </li>

                    <li>
                        <input name="" id="" placeholder="Как к вам обращаться"></input>                
                    </li>                    

                    <li>
                        <input name="" id="" placeholder="Сообщение"></input>
                    </li>

                    <li>
                        <p>Перезвноню через 30 сек!</p>
                        <button className={" _button"}>отправить</button>
                    </li>
                </ul>
            </form>
        <div className={styles.popup__terminal}>
            <p>{ popupText }</p>
            <div>
                <h2>denis@service:~$</h2>
                <p>
                <Typed className={styles.sectionFirst__typed}
                    strings={[
                        'программист',
                        'сис. администратор',
                        'просто няшка',
                    ]}
                    typeSpeed={70}
                    loop={true}
                    
                />
                </p> 
            </div>     
        </div>
      
      </ section>
      </div>
    )
}