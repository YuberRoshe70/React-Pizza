import React from 'react'

import Categories from "../components/categories/Categories";
import PizzaBlock from "../components/pizza-block/PizzaBlock";
import Sort from "../components/sort/Sort";
import Skeleton from "../components/Skeleton/Skeleton";
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from "../redax/slices/filterSlice"


const Home = () => {

  const categoryId = useSelector((state) => state.filterSlice.categoryId)
  const selectSort = useSelector(state => state.filterSlice.selectSort.sort)
  const value = useSelector(state => state.filterSlice.value)
  const dispatch = useDispatch()
  const [items, setItems] = React.useState([])
  const [isLoading, setIsloading] = React.useState(true)

 
  const onChangeCategoryId = (id) => {
    dispatch(setCategoryId(id))
  }
console.log(categoryId);
  React.useEffect(() => {
    const order = selectSort.includes('-') ? 'asc' : 'desc'
    const sortBy = selectSort.replace('-', '')
    const search = value ? `&search=${value}` : ''
    setIsloading(true)
    fetch(`https://629ef633461f8173e4dcc4cd.mockapi.io/items?${categoryId > 0 ?
      `category=${categoryId}` : ''
      }&sortBy=${sortBy}&order=${order}${search}
     `)
      .then(res => res.json())
      .then(json => {
        setItems(json)
        setIsloading(false)
      })
  }, [categoryId, selectSort, value])


  return (
    <>
      <div className="content__top">
        <Categories setCategoryId={onChangeCategoryId} categoryId={categoryId} />
        <Sort/>
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