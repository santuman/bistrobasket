interface CategoryProps {
  title: string
  component: React.ReactNode
  onClick: React.MouseEventHandler<HTMLDivElement>
}
export default function Category({ title, component, onClick }: CategoryProps) {
  return (
    <div
      className="flex justify-center items-center border-2 border-gray-500 rounded-3xl px-1 py-1 mr-3 text-opacity-30 hover:shadow-inner hover:bg-nice-yellow hover:border-nice-yellow cursor-pointer"
      onClick={onClick}
    >
      <span className="bg-white p-1 rounded-full">{component}</span>
      <div className="mx-3 text-nice-dark font-bold font-title text-md tracking-wider">{title}</div>
    </div>
  )
}
