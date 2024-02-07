import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center">
    <h2 className="text-3xl text-center font-semibold mt-20">I'm <span className="text-indigo-600">Hasan</span>. A Full Stack Developer.</h2>
    <Image src="/assets/hasan.png" className="mt-12" alt="Hasan Sattar" width="400" height="800" />
    </div>
  )
}