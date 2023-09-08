import styles from './article-item.module.scss';
import Link from 'next/link';
import Bookmark from '@/components/bookmark/bookmark';
import Image from 'next/image';
export default function ArticleItem({id, title, description, image}: {id: number, title: string, description: string, image: string}) {
    return (
        <Link href={'/d'} className={styles.container}>
            <Image src={image} alt={''} width={200} height={150}></Image>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <Bookmark id={id}/>
        </Link>
    )
}
