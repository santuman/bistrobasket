import Link from 'next/link'
import Image from 'next/image'

import PButton from './PButton'
import SButton from './SButton'
import NavItem from './NavItem'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 h-16 shadow-md overflow-x-auto">
      <div className="hidden md:block">
        <Link href="/">
          <Image src="/images/logo.svg" width="300px" height="40px" />
        </Link>
      </div>

      {/* <nav>
        <ul className="flex justify-between items-center">
          <NavItem>
            <PButton>Menu</PButton>
          </NavItem>
          <NavItem>
            <Link href="/add">Add Items</Link>
          </NavItem>
          <NavItem>
            <Link href="/dashboard">Dashboard</Link>
          </NavItem>
          <NavItem>
            <button className="bg-red-600 px-3 py-2 text-white rounded">Logout</button>
          </NavItem>
          <NavItem>
            <SButton>Login</SButton>
          </NavItem>
        </ul>
      </nav> */}
    </header>
  )
}
