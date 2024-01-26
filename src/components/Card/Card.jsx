import React, { useState } from 'react';
import styles from './Card.module.scss';
import words from '../../data/words_list.json'
import Arrow_prew from '../arrow_prev/Arrow_prev';
import Arrow_next from '../arrow_next/Arrow_next';

const Card = (props) => {

    //onClick={() => handleClick}

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }

    console.log(props);

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
                            : <button className={styles.check_block}
                                clicked={clicked}
                                onClick={handleClick}>Проверить</button>}
                    </div>
                    <Arrow_next />
                </div>
                <p>[{props.index}/{props.length}]</p>
            </div >

        </React.Fragment>


    )
}

export default Card;