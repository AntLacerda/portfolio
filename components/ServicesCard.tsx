"use client";

import Image from "next/image";

type Props = {
    id: number;
    title: string;
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
            <div className={`h-full w-full flex flex-col justify-between relative`}>
                {/* Título */}
                <div className={`
                    ${isOtherHovered ? 'writing-mode-vertical' : ''}
                `}>
                    <h3 className={`
                        text-white font-bold
                        font-sofia
                        pt-8 px-8
                        ${isOtherHovered 
                            ? 'text-lg [writing-mode:vertical-rl] rotate-180 mx-auto text-center' 
                            : isHovered ? 'text-3xl' : 'text-lg'
                        }
                        
                    `}>
                        {title}
                    </h3>
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
                        width={isHovered ? 250 : 400} 
                        height={isHovered ? 250 : 200}
                        className={`
                            transition-all duration-500
                            
                        `}
                    />
                </div>

                {/* Descrição - apenas quando expandido e não for outro com hover */}
                {!isOtherHovered && (
                    <div className={`
                        transition-all duration-500
                        ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none absolute'}
                    `}>
                        <p className="text-white text-base leading-relaxed mt-4">
                            {description}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}