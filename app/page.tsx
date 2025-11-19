import Image from "next/image";
import TopMenu from "../components/top-menu";
import LogoLoopSection from "../components/LogoLoopSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full z-30">
        <TopMenu />
      </div>
      
      <main className="relative w-full h-screen overflow-hidden">
        <section className="relative w-full h-full">
          {/* Background Image */}
          <Image
            src="/images/backgound.png"
            alt="Background Hero"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        
          <div className="absolute inset-0 bg-black/30 z-10" />

          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8 px-4">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="font-unifraktur text-5xl text-[#FFF6D9] leading-[0.8]">
                creative
              </p>
              <p className="font-sofia text-9xl font-extrabold  text-[#FFF6D9] leading-[0.8] ">
                FULL STACK
              </p>
              <p className="font-sofia text-9xl font-extrabold  text-[#FFF6D9] leading-[0.8]">
                DEVELOPER
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 right-2 z-20">
            <div className="flex flex-col justify-center items-end">
              <p className="font-unifraktur text-3xl text-[#FFF6D9] leading-[0.8]">
                Sonhar é parte importante da jornada.
              </p>
              <p className="font-unifraktur text-3xl text-[#FFF6D9] leading-[0.8]">
                Desenvolver é parte importante da minha!
              </p>
            </div>
          </div>
        </section>
      </main>
      <LogoLoopSection />
      <section className="flex w-full h-screen bg-black">
        <div className="flex flex-col w-1/3">
          <div className="bg-[url(/images/profile.png)] w-full h-3/4 text-[#FFF6D9] p-3 flex flex-col justify-end bg-cover bg-center border-8 border-black rounded-br-[100px]">
            <span className="font-unifraktur">
              26 anos
            </span>
            <span className="font-sofia font-black text-4xl leading-[0.8]">
              ANTONIO LACERDA
            </span>
          </div>
          <div className="bg-[#FFF6D9] h-3/5 w-full">
            <span>
              teste
            </span>
          </div>
        </div>
        <div>

        </div>

      </section>
    </div>
  );
}