import Layout from '@/components/Layout'
import SearchBar from '@/components/SearchBar'
import CatergoryBar from '@/components/CatergoryBar'
import ProductsSection from '@/components/ProductsSection'
import { BACKEND_API } from '../config'

export default function Home({ products }: { products: any }) {
  return (
    <Layout>
      <SearchBar />
      <CatergoryBar />
      <ProductsSection products={products} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${BACKEND_API}/products`)
  const products = await res.json()
  return {
    props: { products },
    revalidate: 60,
  }
}
