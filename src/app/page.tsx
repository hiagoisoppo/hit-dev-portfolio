import Btn from "@/components/ToogleButton";
import Image from "next/image";
import img from "/public/bg.png"
import GlitchedMoonIcon from "@/components/ToogleButton/GlitchedMoonIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-end justify-start py-10 bg-slate-150 dark:bg-slate-800">
      {/* <Image
       src={img}
       alt="bg"
       layout="fill"
      /> */}
      <Btn bool/>
      <Btn bool={false} />
    </main>
  )
}
