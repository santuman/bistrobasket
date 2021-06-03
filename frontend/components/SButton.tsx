interface PButtonProps {
  children: React.ReactNode
}
export default function SButton({ children }: PButtonProps) {
  return (
    <div className="bg-black text-white px-3 py-2 cursor-pointer border-0 rounded">{children}</div>
  )
}
