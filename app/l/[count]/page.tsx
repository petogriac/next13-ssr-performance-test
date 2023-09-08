import Filter from '@/components/filter/filter';
import ArticleItem from '@/components/article-item/article-item';
import './listing.scss';
import * as data from '@/data.json';

export default async function Listing({params}: { params: { count: string }}) {
    const data = await getData(+params.count);

    return (
        <div>
            <h1>Listing {params.count}</h1>

            <Filter style={{marginBottom: '20px'}}/>

            <div className='listing-items'>
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
