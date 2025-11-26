import Image from "next/image";

type BestWorksCardProps = {
    backgroundImage: string;
    title: string;
    description: string;
    specialty: string;
    imageUrl: string;
    direction: "left" | "right";
    widthImage: number;
}

export default function BestWorksCard({backgroundImage, title, description, specialty, imageUrl, direction, widthImage}: BestWorksCardProps) {
    return (
        <div className={`flex h-screen ${direction === "left" ? "flex-row-reverse" : "flex-row"} items-center justify-around bg-cover bg-center p-4`} style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="w-92 text-white">
                <span className="font-unifraktur">{specialty}</span>
                <h4 className="font-sofia font-extrabold text-6xl">{title}</h4>
                <p className="font-sofia">{description}</p>
            </div>
            <div>
                <Image src={imageUrl} alt="" width={widthImage} height={700}/>
            </div>
        </div>
    )
}