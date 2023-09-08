import Filter from '@/components/filter/filter';
import ArticleItem from '@/components/article-item/article-item';
import './listing.scss';

export default function Listing({params}: { params: { count: string } }) {
    const articles = [1, 2, 3, 4, 5];

    return (
        <div>
            <h1>Listing {params.count}</h1>

            <Filter style={{marginBottom: '20px'}}/>

            <div className='listing-items'>
                {articles.map(article => (<ArticleItem key={article} title={'Dummy Article ' + article } description={'Lorem ipsum ...'}/>))}
            </div>
        </div>
    )
}
