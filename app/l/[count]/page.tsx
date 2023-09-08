'use client';

import Filter from '@/components/filter/filter';
import ArticleItem from '@/components/article-item/article-item';
import './listing.scss';
import { useEffect, useState } from 'react';

export default function Listing({params}: { params: { count: string } }) {
    const [data,setData]: [
        data: any,
        setData: any
    ]=useState([]);
    const getData= async ()=>{
        await new Promise(resolve => setTimeout(resolve, +params.count));

        fetch('/data.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson.content)
            });
    }

    useEffect(()=>{
        getData();
    },[])


    if(!data){
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Listing {params.count}</h1>

            <Filter style={{marginBottom: '20px'}}/>

            <div className='listing-items'>
                {
                    data.map((article: any) => (
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

async function getData() {
    const res = await fetch('data.json')

    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
