import React from 'react'
import styles from './Cards.module.scss';
import Card from '../Card/Card';
import words from '../../data/words_list.json';

export default function Cards() {
    return (
        <React.Fragment >
            <div className={styles.container}>
                <h2>Check&remember!</h2>
                {words.map((word, index) => (
                    <Card key={index}
                        {...word}
                    />
                ))}
            </div>
        </React.Fragment>
    )
}