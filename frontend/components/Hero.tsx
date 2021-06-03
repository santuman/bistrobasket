import Image from 'next/image'
export default function Hero() {
  return (
    <div className="bg-cover bg-center bg-no-repeat relative -z-1">
      <Image
        src="/images/Banner.svg"
        width="400px"
        height="100px"
        layout="responsive"
        className="object-cover rounded-lg"
      />
    </div>
  )
}
