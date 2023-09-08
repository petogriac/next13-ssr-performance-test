import Link from 'next/link';
import styles from './footer.module.scss'

export default function Footer() {
    return (
        <div className={styles.container}>
            <Link href='/l/0'>Listing 0</Link>
            <Link href='/l/80'>Listing 80</Link>
            <Link href='/l/120'>Listing 120</Link>
            <Link href='/l/500'>Listing 500</Link>
            <Link href='/l/3500'>Listing 3500</Link>
        </div>
    )
}
