import { GiSlicedBread, GiCakeSlice } from 'react-icons/gi'
import { FaMugHot } from 'react-icons/fa'
import { BiCookie } from 'react-icons/bi'
import { IoPizzaOutline } from 'react-icons/io5'
import Category from './Category'
import { useState } from 'react'
import { useContext } from 'react'
import AppContext from 'context/AppContext'

const cats = [
  {
    id: 'cat1',
    component: <GiSlicedBread />,
    value: 'Pastries',
    name: 'Pastry',
  },
  {
    id: 'cat2',
    component: <BiCookie />,
    value: 'Cookies',
    name: 'Cookie',
  },
  {
    id: 'cat3',
    component: <IoPizzaOutline />,
    value: 'Pizza',
    name: 'Pizza',
  },
  {
    id: 'cat4',
    component: <FaMugHot />,
    value: 'Drinks',
    name: 'Drink',
  },
  {
    id: 'cat5',
    component: <GiCakeSlice />,
    value: 'Dessert',
    name: 'Dessert',
  },
]

export default function CatergoryBar() {
  const { handleSelectedCat } = useContext(AppContext)
  return (
    <div className="flex justify-center mt-20 overflow-x-auto">
      {cats.map((cat) => (
        <Category
          key={cat.id}
          title={cat.value}
          component={cat.component}
          onClick={() => handleSelectedCat(cat.name)}
        />
      ))}
    </div>
  )
}
