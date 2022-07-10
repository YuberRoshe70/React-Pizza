import React from 'react'

const Categories = ({ setCategoryId, categoryId }) => {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
    return (
        <div className="categories">
            <ul>
                {categories.map((item, i) => (
                    <li key={i} onClick={() => setCategoryId(i)}
                        className={categoryId === i ? 'active' : ''}>
                        {item}</li>)
                )}
            </ul>
        </div>
    )
}

export default Categories