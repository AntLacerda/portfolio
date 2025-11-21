import { ReactElement } from "react";

type SkillProps = {
    skill: ReactElement;
    title: string;
    level: number;
    style?: string;
}

export default function Skill({skill, title, level, style}: SkillProps) {
    return (
        <div className="flex flex-row my-4 gap-2 items-center">
            <div className={`${style} w-16 h-16 rounded-lg flex flex-col items-center justify-center text-white text-4xl`}>
                {skill}
            </div>
            <div className="flex flex-col">
                <span className="font-medium">{title}</span>
                <span className="">
                    {Array.from({ length: level }, (_, index) => (
                        <span key={index}>★</span>
                    ))}
                </span>
            </div>
        </div>
    )
}