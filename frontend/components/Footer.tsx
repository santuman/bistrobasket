import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="text-center">
      <p>Copyright &copy; Bistro Basket {new Date().getFullYear()}</p>
      <p>
        <Link href="/about">About</Link>
      </p>
    </footer>
  )
}
