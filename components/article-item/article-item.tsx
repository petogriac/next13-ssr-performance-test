import styles from './article-item.module.scss';
import Link from 'next/link';
import Bookmark from '@/components/bookmark/bookmark';
export default function ArticleItem({id, title, description}: {id: number, title: string, description: string }) {
    return (
        <Link href={'/d'} className={styles.container}>
            <h1>{title}</h1>
            <p>{description}</p>
            <Bookmark id={id}/>
        </Link>
    )
}
