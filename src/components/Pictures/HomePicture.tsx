import MyPicture from '@/assets/picture.png'
import MyPictureBlue from '@/assets/pictureBlue.png'
import MyPictureGreen from '@/assets/pictureGreen.png'
import MyPictureRed from '@/assets/pictureRed.png'
import Image from 'next/image'

export default function HomePicture() {
  return (
    <div className="group/pictureglitch absolute bottom-[0%] right-[0%] flex h-[50%] w-[50%] items-center justify-center xs:h-[60%] xs:w-[65%] md:bottom-[-5%] md:right-[0%] md:h-[75%] md:w-[60%] lg:bottom-[0%] lg:right-[-2%] lg:h-[100%] lg:w-[40%]">
      {/* BASE GLITCH */}
      <div className="negativepattern h-full w-full bg-primary-700 [clip-path:_polygon(0%_100%,_100%_0%,_100%_0%,_100%_100%)] dark:bg-secondary-100"></div>
      <Image
        src={MyPicture}
        alt="Picture of myself"
        className="absolute z-10 h-full w-full object-cover group-hover/pictureglitch:animate-[glitch0_700ms_infinite]"
      />
      <Image
        src={MyPictureGreen}
        alt="Picture of myself copy for effects"
        className="absolute z-0 h-full w-full object-cover opacity-0 group-hover/pictureglitch:animate-[glitch0_500ms_infinite]"
      />
      <Image
        src={MyPictureRed}
        alt="Picture of myself copy for effects"
        className="absolute z-0 h-full w-full object-cover opacity-0 group-hover/pictureglitch:animate-[glitch0_315ms_infinite]"
      />
      <Image
        src={MyPictureBlue}
        alt="Picture of myself copy for effects"
        className="absolute z-0 h-full w-full object-cover opacity-0 group-hover/pictureglitch:animate-[glitch0_645ms_infinite]"
      />
      {/* FIRST GLITCH */}
      <Image
        src={MyPicture}
        alt="Picture of myself copy for effects"
        className="group-hover/pictureglitch absolute z-30 h-full w-full -translate-y-1 translate-x-1 object-cover opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/pictureglitch:animate-[glitch1_700ms_infinite]"
      />
      <Image
        src={MyPictureGreen}
        alt="Picture of myself copy for effects"
        className="absolute z-20 h-full w-full -translate-y-1 translate-x-1 object-cover opacity-0  [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/pictureglitch:animate-[glitch1_500ms_infinite]"
      />
      <Image
        src={MyPictureRed}
        alt="Picture of myself copy for effects"
        className="absolute z-20 h-full w-full -translate-y-1 translate-x-1 object-cover opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/pictureglitch:animate-[glitch1_315ms_infinite]"
      />
      <Image
        src={MyPictureBlue}
        alt="Picture of myself copy for effects"
        className="absolute z-20 h-full w-full -translate-y-1 translate-x-1 object-cover opacity-0 [clip-path:polygon(0%_0%,100%_0%,100%_45%,0%_45%)] group-hover/pictureglitch:animate-[glitch1_645ms_infinite]"
      />
      {/* SECOND GLITCH */}
      <Image
        src={MyPicture}
        alt="Picture of myself copy for effects"
        className="group-hover/pictureglitch absolute z-50 h-full w-full -translate-x-1 translate-y-1 object-cover opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/pictureglitch:animate-[glitch2_700ms_infinite]"
      />
      <Image
        src={MyPictureGreen}
        alt="Picture of myself copy for effects"
        className="absolute z-40 h-full w-full -translate-x-1 translate-y-1 object-cover opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/pictureglitch:animate-[glitch2_500ms_infinite]"
      />
      <Image
        src={MyPictureRed}
        alt="Picture of myself copy for effects"
        className="absolute z-40 h-full w-full -translate-x-1 translate-y-1 object-cover opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/pictureglitch:animate-[glitch2_315ms_infinite]"
      />
      <Image
        src={MyPictureBlue}
        alt="Picture of myself copy for effects"
        className="absolute z-40 h-full w-full -translate-x-1 translate-y-1 object-cover opacity-0 [clip-path:polygon(0%_60%,100%_60%,100%_100%,0%_100%)] group-hover/pictureglitch:animate-[glitch2_645ms_infinite]"
      />
    </div>
  )
}
