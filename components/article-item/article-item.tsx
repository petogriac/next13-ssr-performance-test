import styles from './article-item.module.scss';
import Link from 'next/link';
export default function ArticleItem({title, description}: { title: string, description: string }) {
    return (
        <Link href={'/d'} className={styles.container}>
            <h1>{title}</h1>
            <p>{description}</p>
        </Link>
    )
}
