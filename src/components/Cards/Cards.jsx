import React from 'react'
import styles from './Cards.module.scss';
import Card from '../Card/Card';
import words from '../../data/words_list.json';

export default function Cards() {
    return (
        <React.Fragment className={styles.container}>
            {words.map((word, index) => (
                <Card key={index}
                    {...word} />
            ))}
        </React.Fragment>
    )
}