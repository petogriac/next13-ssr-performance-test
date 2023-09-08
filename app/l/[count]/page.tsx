import Filter from '@/components/filter/filter';
import ArticleItem from '@/components/article-item/article-item';
import './listing.scss';

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
    const res = await fetch('https://www.bazar.at/api/article/l/07-wo/s?randVal=18')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
