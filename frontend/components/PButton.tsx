interface PButtonProps {
  children: React.ReactNode
}
export default function PButton({ children }: PButtonProps) {
  return (
    <div className="inline-block bg-red-500 text-white px-2 py-1 cursor-pointer border-0 rounded">
      {children}
    </div>
  )
}
