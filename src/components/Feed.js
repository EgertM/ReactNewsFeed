import React, {useState, useEffect} from 'react';
import client from '../apollo';
import gql from 'graphql-tag';


const query = gql`
    query{
        articles{
            title
            urlToImage
            url
            source{
                name
            }
        }
    }
`;
const Article = ({data}) => {
    return (
        <a href={data.url} target="blank" className="article">
            <img className="article__image" src={data.urlToImage} alt=""/>
            <div className="article__source">{data.source.name}</div>
            <div className="article__title">{data.title}</div>
        </a>
    )
};
const Feed = () => {

    const [articles, setArticles] = useState([]);

    useEffect(
        () => {
            client.query({query})
                .then(response => setArticles(response.data.articles)).catch(error => console.log(error))
        }, []
    );


    return (
        <div className='feed'>
            {articles.map((article, index) => (
                <Article key={index} data={article}/>
            ))}
            <h1>Made with NewsApi.org</h1>
        </div>
    );
};
export default Feed;