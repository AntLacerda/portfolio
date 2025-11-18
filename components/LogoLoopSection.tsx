import LogoLoop from './LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs } from 'react-icons/si';
import { DiAndroid, DiJava } from 'react-icons/di';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <DiAndroid />, title: "Android", href: "https://developer.android.com" },
    { node: <DiJava />, title: "Java", href: "https://www.java.com" },
];

export default function LogoLoopSection() {
    return (
        <section className='h-full relative overflow-hidden'>
            <LogoLoop
                logos={techLogos}
                speed={40}
                direction="left"
                logoHeight={48}
                gap={40}
                hoverSpeed={10}
                scaleOnHover
                fadeOut
                fadeOutColor="#000"
                ariaLabel="Technology partners"
                className='bg-black text-white'
            />
        </section>
    )
}