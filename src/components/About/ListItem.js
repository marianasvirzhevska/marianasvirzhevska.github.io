import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ListItem.module.scss'

function ListItem ({ member }){
    const { id, name, surname, image, character, info } = member;

    return(
        <li className={styles.listItem}>
            <Link to={`/person-info/${id}`} className={styles.link}>
                <div className={styles.image} style={{background: `url(${image}) no-repeat center`}}/>
                <div className={styles.details}>
                    <p className={styles.actor}>{`${name} ${surname}`}</p>
                    <p className={styles.character}>{character}</p>
                    <div className={styles.info}>{info}</div>
                </div>
            </Link>
        </li>
    )
}

export default ListItem;