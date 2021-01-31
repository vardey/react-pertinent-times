import React from 'react'

const Category = ({category, getCat}) => {
    return (
        <li  className="nav-item" onClick={()=>getCat(category.text)}>
            {category.text}
        </li>
    )
}

export default Category
