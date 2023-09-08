import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <div className={styles.container}>
            <Image
                src="/logo_color.webp"
                width={170}
                height={80}
                alt="Garwan logo"
            />

            <Link href='/l/0'>Listing 0</Link>
            <Link href='/l/80'>Listing 80</Link>
            <Link href='/l/120'>Listing 120</Link>
            <Link href='/l/500'>Listing 500</Link>
            <Link href='/l/3500'>Listing 3500</Link>
        </div>
    )
}
