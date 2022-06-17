import React from 'react'

const Categories = ({setCategoryItem,value}) => {

    // const [categoryItem, setCategoryItem] = React.useState(0)
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]
    return (
        <div className="categories">
            <ul>
                {categories.map((item, i) => (
                    <li key={i} onClick={() => setCategoryItem(i)}
                        className={value === i ? 'active' : ''}>
                        {item}</li>)
                )}
            </ul>
        </div>
    )
}

export default Categories