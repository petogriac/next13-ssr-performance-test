import Filter from '@/components/filter/filter';
import ArticleItem from '@/components/article-item/article-item';
import styles from './listing.module.scss';
import * as data from '@/data.json';
import History from '@/components/history/history';

export default async function Listing({params}: { params: { count: string }}) {
    const data = await getData(+params.count);

    return (
        <div className={styles.list}>
            <h1>Listing {params.count}</h1>
            <p>{data.content[0].common.title + ' ' + data.content[1].common.title}</p>

            <History/>

            <Filter style={{marginBottom: '20px'}}/>

            <div className={styles.items}>
                {
                    data.content.map((article: any) => (
                        <ArticleItem
                            key={article.id}
                            id={article.id}
                            title={article.common.title}
                            description={article.common.description}
                            image={article.image.link}
                        />))
                }
            </div>
        </div>
    )
}

async function getData(sleep: number) {
    const sleeper = await new Promise(resolve => setTimeout(resolve,sleep))

    return data;
}
