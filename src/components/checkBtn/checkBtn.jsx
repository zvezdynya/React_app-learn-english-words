import styles from './checkBtn.module.scss';
import React, { useState } from 'react';



const checkBtn = (clicked, onClick) => {

    return (
        <button className={styles.check_block}
            {...clicked} {...onClick}>Проверить</button>
    )
}

export default checkBtn;