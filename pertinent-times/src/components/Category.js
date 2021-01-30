import React from 'react'

const Category = ({category, getCat}) => {
    return (
        <li onClick={()=>getCat(category.text)}>
            {category.text}
        </li>
    )
}

export default Category
