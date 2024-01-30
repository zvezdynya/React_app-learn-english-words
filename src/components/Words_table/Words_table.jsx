import React from 'react';
import styles from './Words_table.module.scss';
import save from '../../assets/img/icons_check.png';
import edit from '../../assets/img/icons_edit.png';
import del from '../../assets/img/icons_basket.png';
import cancel from '../../assets/img/icons_cross.png';

const Words_table = () => {

    return (
        <>
            <div className={styles.container}>
                <table>
                    <thead>
                        <tr>
                            <th className={styles.hash}>#</th>
                            <th>Word</th>
                            <th>Transcription</th>
                            <th>Translation</th>
                            <th >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr id='edit_block'>
                            <td className={styles.hash}>1</td>
                            <td><input type='text' placeholder='Word'></input></td>
                            <td><input type='text' placeholder='Transcription'></input></td>
                            <td><input type='text' placeholder='Translation'></input></td>
                            <td className={styles.btns}>
                                <button className={styles.btn_save}>Save <img src={save}></img></button>
                                <button className={styles.btn_cancel}><img src={cancel}></img></button>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.hash}>2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className={styles.btns}>
                                <button className={styles.btn_edit}><img src={edit}></img></button>
                                <button className={styles.btn_delete}><img src={del}></img></button>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.hash}>3</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className={styles.btns}>
                                <button className={styles.btn_edit}><img src={edit}></img></button>
                                <button className={styles.btn_delete}><img src={del}></img></button>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.hash}>4</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className={styles.btns}>
                                <button className={styles.btn_edit}><img src={edit}></img></button>
                                <button className={styles.btn_delete}><img src={del}></img></button>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.hash}>5</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className={styles.btns}>
                                <button className={styles.btn_edit}><img src={edit}></img></button>
                                <button className={styles.btn_delete}><img src={del}></img></button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Words_table;