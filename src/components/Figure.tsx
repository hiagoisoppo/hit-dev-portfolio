'use client'
import Image from 'next/image'

export default function Figure({
  url,
  alt,
  classImg,
  classBox,
}: {
  url: string
  alt: string
  classImg: string
  classBox: string
}) {
  return (
    <figure className={classBox}>
      <Image
        loader={() => url}
        src={url}
        alt={alt}
        width={100}
        height={100}
        className={classImg}
      />
      <div className="absolute h-full w-full bg-secondary-200 mix-blend-color"></div>
    </figure>
  )
}
