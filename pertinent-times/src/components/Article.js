import React from 'react'

const Article = ({article}) => {
    return (
        <div>
            <h3>{article.title}</h3>
            <p>{article.abstract}</p>
            <div>{article.published_date}</div>
            <div><img alt="" width="200" height="200" src ={article.multimedia[0].url}/></div>
            <div><a href={article.url}>Click for more</a></div>
        </div>
    )
}

export default Article
