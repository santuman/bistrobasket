import ProductList from './ProductList'

export default function ProductsSection({ products }: { products: any }) {
  return (
    <div className="flex flex-col items-center">
      <ProductList products={products} />
    </div>
  )
}
