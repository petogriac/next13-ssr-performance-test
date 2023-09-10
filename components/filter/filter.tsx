'use client'

import styles from './filter.module.scss'
import { FormEvent } from 'react';

export default function Filter({style, values}: { style: any, values: any }) {
    // TODO can be done probably more efficiently in next13
    function onSubmit(event: FormEvent<HTMLFormElement>) {
        console.log('submit')
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        console.log(formData.get('subcategory'), formData.get('address'), formData.get('type'))
    }

    return (
        <form onSubmit={onSubmit} className={styles.form} style={style}>
            <input placeholder='Dummy subcategory' value={values.subcategory} type="text" name="subcategory"/>
            <input placeholder='Dummy address' value={values.address} type="text" name="address"/>
            <input placeholder='Dummy type'  value={values.type} type="text" name="type"/>

            <button type='submit'>Submit</button>
        </form>
    )
}
