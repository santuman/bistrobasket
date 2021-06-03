import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
export default function SearchBar() {
  const [term, setTerm] = useState('')
  const handleSubmit = () => {
    console.log(term)
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }
  return (
    <div className="border-2 border-gray-500 rounded-3xl w-2/4 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-start items-center px-3 py-1">
          <FaSearch />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none container ml-4 bg-nice-white"
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  )
}
