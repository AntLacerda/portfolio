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
          <div className="flex flex-col bg-[#FFF6D9] h-3/5 w-full p-4 border-8 border-black rounded-bl-[100px]">
            <span className="font-unifraktur text-5xl mb-2">
              About me
            </span>
            <p className="font-sofia text-black mt-2 text-sm">
              Olá, <br />
              Eu me chamo Antonio Lacerda, sou desenvolvedor Full-Stack, especialista em desenvolvimento web e Mobile. Criar sistemas do zero até à entrega e me desafiar solucionando problemas é o que me motiva a continuar construindo softwares com qualidade, segurança e elegância.
              <br/><br/>              
            </p>
            <strong className="font-sofia">Vamos construir o futuro juntos.</strong>
          </div>
        </div>
        <div className="flex flex-col w-2/3 h-full">
          <div className="flex flex-row w-full h-2/3">
           <div className="p-4 border-8 border-black w-1/2 rounded-tr-[100px] bg-[#FFF6D9]">
              <span className="font-unifraktur text-5xl">Educação</span>
              <div className="mt-2">
                <span className="font-unifraktur font-bold text-ms">
                  2021
                </span>
                <p className="font-sofia text-black font-bold">
                  Bacharelado em Ciências Jurídicas e Sociais
                </p>
                <p className="font-sofia text-black text-sm">
                  Faculdade Católica da Paraíba
                </p>
              </div>
              <div className="mt-2">
                <span className="font-unifraktur font-bold text-ms">
                  2025
                </span>
                <p className="font-sofia text-black font-bold">
                  Análise e Desenvolvimento de Sistemas
                </p>
                <p className="font-sofia text-black text-sm">
                  Instituto Federal da Paraíba
                </p>
                
              </div>
              <span className="font-unifraktur text-5xl">Experiências</span>
              <div className="mt-2">
                <span className="font-unifraktur font-bold text-ms">
                  2024
                </span>
                <p className="font-sofia text-black font-bold">
                  Loopis Jr. Soluções Tecnológicas
                </p>
                <p className="font-sofia text-black text-sm">
                  Diretor Presidente
                </p>
              </div>
              <div className="mt-2">
                <span className="font-unifraktur font-bold text-ms">
                  2025
                </span>
                <p className="font-sofia text-black font-bold">
                  Instituto Federal da Paraíba
                </p>
                <p className="font-sofia text-black text-sm">
                  Monitor de Programação para Dispositivos Móveis
                </p>
                
              </div>
           </div>
           <div className="p-8 border-8 border-black w-1/2 bg-[#FFF6D9]">
              <span>softwares skills</span>
           </div>

          </div>
          <div className="p-8 border-8 border-black h-1/3 bg-[#FFF6D9]">

          </div>
        </div>

      </section>
    </div>
  );
}