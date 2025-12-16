"use client";

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
import { useState } from "react";
import BestWorksCard from "../components/BestWorksCard";
import ServicesCard from "@/components/ServicesCard";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full z-30">
        <TopMenu />
      </div>
      
      <main className="relative w-full h-screen overflow-hidden">
        <section id="" className="relative w-full h-full">
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
      <section id="about" className="flex w-full h-screen bg-black">
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
      <section id="projects" className="flex flex-col bg-black">
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
          <BestWorksCard
            backgroundImage="/images/bp03.png"
            title="CAIXUP - AÇAÍ DO MANO"
            description="Sistema de controle de caixa e gestão para açaíteria. O projeto foi desenvolvido utilizando as linguagens TypeScript, Next.js, Tailwind CSS e Node.js."
            specialty="Projeto Web - 2025"
            imageUrl="/images/rp03.png"
            direction="right"
            widthImage={700}
          />
        </div>
      </section>
      <section id="services" className="flex flex-col bg-black">
        <div className="text-[#FFF6D9] p-4 flex flex-col items-center justify-center mb-2">
          <h3 className="font-unifraktur text-2xl -mb-3">Meus</h3>
          <h3 className="font-sofia font-extrabold text-5xl">SERVIÇOS</h3>
        </div>
        <div className="flex gap-4 w-full h-[500px] px-6 mb-6">
          <ServicesCard 
            id={1} 
            bgColor="bg-gradient-to-b from-[#0D1E44] to-[#214CAA]" 
            title="Desemvolvimento Web" 
            subtitle="Transforme sua ideia em um sistema web poderoso"
            description="Desenvolvemos sistemas web completos e personalizados para atender às necessidades da sua empresa. Nossa equipe une tecnologia, design e estratégia para criar aplicativos eficientes, escaláveis e fáceis de usar. Desde o planejamento até a entrega, cuidamos de cada detalhe para que sua solução seja moderna, segura e preparada para crescer junto com você." 
            image="/images/devweb.png"
            hoveredCard={hoveredCard}
            onMouseEnter={setHoveredCard}
            onMouseLeave={() => setHoveredCard(null)}  
          />
          <ServicesCard 
            id={2} 
            bgColor="bg-gradient-to-b from-[#239399] via-[#32cbd7] to-[#3AF5FF]" 
            title="Criação de Sites" 
            subtitle="Divulgue sua marca com um site profissional"
            description="Transmita confiança desde o primeiro clique. Criamos sites modernos, rápidos e totalmente responsivos, pensados para destacar sua marca e transformar visitantes em clientes. Do visual à experiência do usuário, cada detalhe é planejado para elevar sua presença digital e gerar resultados reais." 
            image="/images/sites.png"
            hoveredCard={hoveredCard}
            onMouseEnter={setHoveredCard}
            onMouseLeave={() => setHoveredCard(null)}
          />
          <ServicesCard 
            id={3} 
            bgColor="bg-[#A2A6F7]" 
            title="Desemvolvimento Mobile" 
            subtitle="Leve seu negócio para onde seus clientes estão"
            description="Conecte-se com seu público de forma simples e prática. Desenvolvemos aplicativos mobile intuitivos, seguros e eficientes para impulsionar seu negócio e aproximar você dos seus clientes. Funcionalidade, desempenho e experiência fluida para acompanhar o ritmo do mercado atual." 
            image="/images/desmobi.png"
            hoveredCard={hoveredCard}
            onMouseEnter={setHoveredCard}
            onMouseLeave={() => setHoveredCard(null)}  
          />
          <ServicesCard 
            id={4} 
            bgColor="bg-[#ED3E7E]" 
            title="Design Gráfico"
            subtitle="Dê vida à sua marca com designs impactantes" 
            description="Mostre ao mundo a força da sua identidade visual. Criamos artes profissionais e memoráveis, pensadas para fortalecer sua marca e transmitir sua mensagem com clareza e estilo. De logotipos a materiais promocionais, produzimos designs que impressionam e geram conexão imediata." 
            image="/images/desgraphic.png"
            hoveredCard={hoveredCard}
            onMouseEnter={setHoveredCard}
            onMouseLeave={() => setHoveredCard(null)}  
          />
        </div>
      </section>
      <footer className="bg-black">
        <div className="bg-[#FFF6D9] flex justify-around items-center p-4 py-8 rounded-tr-full">
          <div className="flex flex-col">
            <span className="font-uni text-black font-extrabold text-4xl">MUITO OBRIGADO!</span>
            <p className="">Desenvolvendo com criatividade e visão. Entre em contato e continue conectado.</p>
          </div>
          <p>&copy; All rights reserved - Antonio Lacerda 2025</p>
        </div>
      </footer>
    </div>
  );
}