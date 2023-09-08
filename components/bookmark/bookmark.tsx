'use client';

import styles from './bookmark.module.scss';
import React from 'react';
export default function Bookmark({id}: {id: number}) {
    function clicked(e: React.MouseEvent<HTMLElement>) {
        e.preventDefault();
        console.log('Bookmark clicked for id: ' + id);
    }

    return (
        <i className={styles.heart} onClick={clicked}></i>
    )
}
