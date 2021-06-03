import Image from 'next/image'

interface ProductProps {
  title: string
  description: string
  image: any
  price: any
  onClick: React.MouseEventHandler<HTMLDivElement>
}
export default function Product({ title, description, image, price, onClick }: ProductProps) {
  return (
    <div
      className="flex justify-between items-center bg-prod-white rounded-3xl shadow-neuo p-5 cursor-pointer hover:shadow-md xls:flex-col xs:flex-row xs:h-52 xs:w-96 xls:h-96"
      // style={{ width: '390px', height: '200px' }}
      onClick={onClick}
    >
      <Image
        src={image?.formats?.thumbnail.url || image.url}
        width="600px"
        height="600px"
        className="object-contain"
      />
      <div className="flex flex-col ml-4 gap-y-4">
        <h2 className="text-lg font-title text-black font-semibold tracking-wider leading-5">
          {title}
        </h2>
        <p className="text-xs font-title text-nice-dark tracking-wider ">{description}</p>
        <div className="text-md text-yellow-500 font-bold font-title">
          <span>Rs. {price}</span>
        </div>
      </div>
    </div>
  )
}
