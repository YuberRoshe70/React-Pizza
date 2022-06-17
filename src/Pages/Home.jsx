import React from 'react'

import Categories from "../components/categories/Categories";
import PizzaBlock from "../components/pizza-block/PizzaBlock";
import Sort from "../components/sort/Sort";
import Skeleton from "../components/Skeleton/Skeleton";



const Home = ({ value }) => {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsloading] = React.useState(true)

  const [categoryItem, setCategoryItem] = React.useState(0)
  const [selectSort, setSelectSort] = React.useState({ name: "популярности", sort: "rating" })
 

  React.useEffect(() => {

    const order = selectSort.sort.includes('-') ? 'asc' : 'desc'
    const sortBy = selectSort.sort.replace('-', '')
    const search = value ? `&search=${value}` : ''    
    setIsloading(true)
    fetch(`https://629ef633461f8173e4dcc4cd.mockapi.io/items?${categoryItem > 0 ?
      `category=${categoryItem}` : ''
      }&sortBy=${sortBy}&order=${order}${search}
     `)
      .then(res => res.json())
      .then(json => {
        setItems(json)
        setIsloading(false)

      })

  }, [categoryItem, selectSort, value])

//.filter(item => (
          //item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())))

  return (
    <>
      <div className="content__top">
        <Categories setCategoryItem={(i) => setCategoryItem(i)} value={categoryItem} />
        <Sort selectSort={selectSort} setSelectSort={(i) => setSelectSort(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? [...Array(8)].map((item, idx) => (
          <Skeleton {...item} key={idx} />
        )) : items.map((item, idx) => (
            <PizzaBlock {...item} key={idx} />
          ))

        }
      </div>
    </>
  )
}

export default Home