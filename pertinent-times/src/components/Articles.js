import React from 'react'
import Article from './Article'
import uuid from 'react-uuid'

const Articles = ({articles}) => {
    return (
        <div>
            {
                articles.map((article)=>(<Article key={uuid()} article={article}/>))
            }
        </div>
    )
}

export default Articles
