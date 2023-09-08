import Filter from '@/components/filter/filter';
import ArticleItem from '@/components/article-item/article-item';
import './listing.scss';
import data from '@/data.json';

export default function Listing({params}: { params: { count: string } }) {
    const articles = data.content;

    return (
        <div>
            <h1>Listing {params.count}</h1>

            <Filter style={{marginBottom: '20px'}}/>

            <div className='listing-items'>
                {
                    articles.map(article => (
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
