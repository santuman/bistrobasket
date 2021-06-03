import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import { useRouter } from 'next/router'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import theme from '../Theme'

interface LayoutProps {
  title?: string
  description?: string
  keywords?: string
  children: React.ReactNode
}
export default function Layout({
  title = 'Bistro Basket | Best bakes in town',
  description = 'Bistro basket provides no.1 qulaity baking products, from cookie to birthday cakes',
  keywords = 'bistro, bakery, pastry, cookie, breads',
  children,
}: LayoutProps) {
  const router = useRouter()
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Hero />}
      <div className="max-w-7xl my-10 mx-auto bg-red">{children}</div>
      <Footer />
    </ThemeProvider>
  )
}
