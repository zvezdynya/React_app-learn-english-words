import React, { useState } from 'react';
import styles from './Card.module.scss';
import words from '../../data/words_list.json'
import Arrow_prew from '../arrow_prev/Arrow_prev';
import Arrow_next from '../arrow_next/Arrow_next';
import BtnCheck from '../checkBtn/checkBtn';
const Card = (props) => {
    debugger

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <React.Fragment >
            <div className={styles.container} >
                <div className={styles.card_block}>
                    <Arrow_prew />
                    <div className={styles.card}>
                        <p className={styles.word}>{props.english}</p>
                        <p className={styles.transcription}>{props.transcription}</p>
                        {clicked
                            ? <p className={styles.check_block}
                                clicked={clicked}
                                onClick={handleClick}>{props.russian}</p>
                            : <BtnCheck clicked={clicked}
                                onClick={handleClick} />
                        }
                    </div>
                    <Arrow_next />
                </div>
            </div >

        </React.Fragment>


    )
}

export default Card;