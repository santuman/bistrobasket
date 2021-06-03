import AppContext from 'context/AppContext'
import { useState } from 'react'
import { useContext } from 'react'
import MaxWidthDialog from './PorductDialog'
import Product from './Product'

// const Pastry = [
//   {
//     id: 'p1',
//     name: 'Cup Cake',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/cake-chocolate.png',
//     price: '225',
//   },
//   {
//     id: 'p2',
//     name: 'Croissant',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/croissant.png',
//     price: '220',
//   },
//   {
//     id: 'p3',
//     name: 'Toast',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/toast.png',
//     price: '310',
//   },
//   {
//     id: 'p4',
//     name: 'Dunking Donuts',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/dunkin-donuts.png',
//     price: '70',
//   },
//   {
//     id: 'p5',
//     name: 'Plane Donuts',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/plane-donut.png',
//     price: '20',
//   },
//   {
//     id: 'p6',
//     name: 'Cheese Puff',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/cheese-puff.png',
//     price: '15',
//   },
//   {
//     id: 'p7',
//     name: 'Pretzels',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/pretzels.png',
//     price: '15',
//   },
//   {
//     id: 'p8',
//     name: 'Simit Bagel',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/bagel.png',
//     price: '15',
//   },
// ]
// const Cookie = [
//   {
//     id: 'c1',
//     name: 'Chocolate Cookie',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/chocolate-chip-cookie.png',
//     price: '225',
//   },
//   {
//     id: 'c2',
//     name: 'Chocolate Brownie',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/chocolate-brownie.png',
//     price: '225',
//   },
//   {
//     id: 'c3',
//     name: 'Cookie Biscuit',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/cookie-biscuit.png',
//     price: '225',
//   },
//   {
//     id: 'c4',
//     name: 'Pan Donuts',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/pan-donuts.png',
//     price: '225',
//   },
//   {
//     id: 'c5',
//     name: 'Toast Biscuit',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/toast-biscuit.png',
//     price: '225',
//   },
//   {
//     id: 'c6',
//     name: 'Biscotti Dessert Biscuit',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/biscotti-dessert-biscuit.png',
//     price: '225',
//   },
//   {
//     id: 'c7',
//     name: 'Plane Biscuit',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/plane-biscuit.png',
//     price: '225',
//   },
// ]
// const Pizza = [
//   {
//     id: 'pi1',
//     name: 'Cheese Pizza',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/cheese-pizza.png',
//     price: '225',
//   },
//   {
//     id: 'pi2',
//     name: 'Margarita Pizza',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/margarita-pizza.png',
//     price: '225',
//   },
//   {
//     id: 'pi3',
//     name: 'Pepperoni Pizza',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/pepperoni-pizza.png',
//     price: '225',
//   },
//   {
//     id: 'pi4',
//     name: 'Chicken Chilli Pizza',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/chicken-chilli-pizza.png',
//     price: '225',
//   },
// ]
// const Drink = [
//   {
//     id: 'di1',
//     name: 'Milk Coffee',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/milk-coffee.png',
//     price: '225',
//   },
//   {
//     id: 'di2',
//     name: 'Black Coffe',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/black-coffee.png',
//     price: '225',
//   },
//   {
//     id: 'di3',
//     name: 'Milk Tea',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/milk-tea.png',
//     price: '225',
//   },
//   {
//     id: 'di4',
//     name: 'Green Tea',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/green-tea.png',
//     price: '225',
//   },
//   {
//     id: 'di5',
//     name: 'Lemon Tea',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/lemon-tea.png',
//     price: '225',
//   },
// ]
// const Dessert = [
//   {
//     id: 'de1',
//     name: 'Flourless Chocolate Cake',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/flourless-chocolate-cake.png',
//     price: '225',
//   },
//   {
//     id: 'de2',
//     name: 'Mango Pudding',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/mango-pudding.png',
//     price: '225',
//   },
//   {
//     id: 'de3',
//     name: 'Pineapple Cake Dim Sum',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/pineapple-cake-dim-sum.png',
//     price: '225',
//   },
//   {
//     id: 'de4',
//     name: 'Truffle Chocolate Cake',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/truffle-chocolate-cake.png',
//     price: '225',
//   },
//   {
//     id: 'de5',
//     name: 'Cream Pie',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/cream-pie.png',
//     price: '225',
//   },
//   {
//     id: 'de6',
//     name: 'Honey Cake',
//     description: 'In the season of fresh strawberries, I suggest making a very tasty.',
//     src: '/images/honey-cake.png',
//     price: '225',
//   },
// ]
export default function ProductList({ products }: { products: any }) {
  const [selectedProduct, setSelectedProduct] = useState({})
  const { selectedCat } = useContext(AppContext)
  const [showModal, setShowModal] = useState(false)

  const hideModalHandler = () => setShowModal(false)
  const showModalHandler = () => setShowModal(true)

  const getProducts = (val: string) =>
    val === 'Pastry'
      ? products.filter((prod: any) => prod.category.name === 'Pastry')
      : val === 'Cookie'
      ? products.filter((prod: any) => prod.category.name === 'Cookie')
      : val === 'Pizza'
      ? products.filter((prod: any) => prod.category.name === 'Pizza')
      : val === 'Drink'
      ? products.filter((prod: any) => prod.category.name === 'Drink')
      : val === 'Dessert'
      ? products.filter((prod: any) => prod.category.name === 'Dessert')
      : []

  return (
    <div className="mt-10 grid gap-y-8 gap-x-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1">
      {showModal && (
        <MaxWidthDialog data={selectedProduct} showModal={showModal} onHide={hideModalHandler} />
      )}
      {getProducts(selectedCat).map((product: any) => (
        <Product
          key={product.id}
          title={product.name}
          description={product.description}
          image={product.image}
          price={product.price}
          onClick={() => {
            showModalHandler()
            setSelectedProduct(product)
          }}
        />
      ))}
    </div>
  )
}
