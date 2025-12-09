"use client";

import Image from "next/image";

type Props = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    bgColor: string;
    hoveredCard: number | null;
    onMouseEnter: (id: number) => void;
    onMouseLeave: () => void;
};

export default function ServicesCard({
    id, 
    title, 
    subtitle,
    description, 
    image, 
    bgColor,
    hoveredCard,
    onMouseEnter,
    onMouseLeave
}: Props) {
    const isHovered = hoveredCard === id;
    const isOtherHovered = hoveredCard !== null && !isHovered;
  
    return (
        <div 
            onMouseEnter={() => onMouseEnter(id)}
            onMouseLeave={onMouseLeave}
            className={`
                ${bgColor}
                rounded-lg
                transition-all
                duration-300
                ease-in-out
                cursor-pointer
                overflow-hidden
                relative
                ${isHovered ? 'flex-2' : isOtherHovered ? 'flex-[0.5]' : 'flex-1'}    
            `} 
        >
            <div className={`h-full w-full flex ${isHovered ? 'flex-row' : 'flex-col'} justify-between relative`}>
                <div className="pt-8 px-8">
                    {/* Título */}
                    <div className={`
                        ${isOtherHovered ? 'writing-mode-vertical' : ''}
                    `}>
                        <h3 className={`
                            text-white font-bold
                            font-sofia
                            
                            ${isOtherHovered 
                                ? 'text-lg [writing-mode:vertical-rl] rotate-180 mx-auto text-center' 
                                : isHovered ? 'text-3xl' : 'text-lg'
                            }
                            
                        `}>
                            {title}
                        </h3>
                    </div>

                    {/* Descrição - apenas quando expandido e não for outro com hover */}
                    {!isOtherHovered && (
                        <div className={`
                            transition-all duration-500
                            w-[350px] text-white
                            ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'}
                        `}>
                            <h4 className="text-xl font-semibold mt-8">
                                {subtitle}
                            </h4>
                            <p className="text-base leading-relaxed mt-8">
                                {description}
                            </p>
                        </div>
                    )}
                </div>

                {/* Imagem - sempre visível */}
                <div className={`
                    transition-all duration-500
                    ${isOtherHovered 
                        ? 'flex-1 flex items-center justify-center overflow-hidden' 
                        : !isHovered 
                            ? 'flex items-center justify-center flex-1' 
                            : 'flex items-center justify-center'
                    }
                `}>
                    <Image 
                        src={image} 
                        alt={title} 
                        width={isHovered ? 400 : 400} 
                        height={isHovered ? 250 : 200}
                        className={`
                            transition-all duration-500
                            
                        `}
                    />
                </div>
            </div>
        </div>
    );
}