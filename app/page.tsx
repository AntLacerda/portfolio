import Image from "next/image";
import TopMenu from "../components/top-menu";
import LogoLoopSection from "../components/LogoLoopSection";
import Skill from "../components/skill";
import Contacts from "../components/Contacts";
import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiGithub } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { MdPhone, MdMail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { HiArrowTurnDownLeft } from 'react-icons/hi2';

import BestWorksCard from "../components/BestWorksCard";

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
           <div className="p-4 border-8 border-black w-1/2 bg-[#FFF6D9] rounded-bl-[100px]">
              <span className="font-unifraktur text-5xl">Software Skills</span>
              <div className="flex justify-around">
                <div>
                  <Skill skill={<SiReact/>} level={4} title="React" style="bg-[#2D8FF8]"/>
                  <Skill skill={<SiTypescript/>} level={3} title="Typescript" style="bg-[#2D3EF8]"/>
                  <Skill skill={<SiNextdotjs/>} level={4} title="Next.js" style="bg-[#343434]"/>
                </div>
                <div>
                  <Skill skill={<DiJava/>} level={3} title="Java" style="bg-[#F87E2D]"/>
                  <Skill skill={<SiNodedotjs/>} level={4} title="Node.js" style="bg-[#00AF1D]"/>
                  <Skill skill={<SiGithub/>} level={4} title="Github" style="bg-[#000000]"/>
                </div>
              </div>
              <span className="font-unifraktur text-5xl">Personal Skills</span>
              <div className="flex gap-2 justify-center mt-4">
                <p><strong>Criativo</strong></p>
                <p><strong>Sociável</strong></p>
                <p><strong>Comunicativo</strong></p>
                <p><strong>Ágil</strong></p>
                <p><strong>Adpatável</strong></p>
              </div>
           </div>

          </div>
          <div className="p-4 border-8 border-black h-1/3 bg-[#FFF6D9] flex rounded-tr-[100px]">
            <div className="w-1/2">
              <span className="font-unifraktur text-5xl">Contato</span>
              <div className="">
                <Contacts icon={<MdPhone />} content="(83) 9.9408-3305" />
                <Contacts icon={<MdMail />} content="lacerdatech99@gmail.com" />
                <Contacts icon={<SiGithub />} content="github.com/antonio-lacerda" />
                <Contacts icon={<FaLinkedin />} content="linkedin.com/antoniolac" />              
              </div>
            </div>
            <div className="w-1/2">
              <span className="font-unifraktur text-5xl">Currículo</span>
              <div className="flex gap-4 mt-3">
                <Image
                  src="/images/qrcode.png"
                  alt="Currículo"
                  width={100}
                  height={150}
                  className=""
                />
                <div >
                  <span className="font-black">Acesse o meu currículo</span>
                  <div className="font-bold text-3xl">
                    <HiArrowTurnDownLeft/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="flex flex-col bg-black">
        <div className="text-[#FFF6D9] p-4 flex flex-col items-center justify-center mb-2">
          <h3 className="font-unifraktur text-2xl -mb-3">Melhores</h3>
          <h3 className="font-sofia font-extrabold text-5xl">TRABALHOS</h3>
        </div>
        <div className="w-full flex flex-col">
          <BestWorksCard
            backgroundImage="/images/bp01.png"
            title="JURIS TANTUM"
            description="Sistema de gestão e produção documental voltado para escritórios de advocacia e juristas em geral. O projeto foi desenvolvido utilizando as linguagens TypeScript, Next.js, Tailwind CSS e Node.js."
            specialty="Projeto Web - 2025"
            imageUrl="/images/rp01.png"
            direction="right"
            widthImage={700}
          />
          <BestWorksCard
            backgroundImage="/images/bp02.png"
            title="N-REPORT"
            description="Sistema de registro de crimes e ocorridos voltado para auxiliar os gestores na tomada de decisão. O projeto foi desenvolvido utilizando React Native, TypeScript, Styled Components e Node.js."
            specialty="Projeto Mobile - 2024"
            imageUrl="/images/rp02.png"
            direction="left"
            widthImage={500}
          />
        </div>


      </section>
    </div>
  );
}