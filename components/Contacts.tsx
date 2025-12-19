import { ReactElement } from "react"

type ContactsProps = {
    icon: ReactElement;
    content: string;
}

export default function Contacts({icon, content}: ContactsProps) {
    return (
        <div className="flex gap-5 my-1.5 items-center">
            <div className="h-7 w-7 bg-black text-white flex items-center justify-center rounded-md">
                {icon}
            </div>
            <span className="">{content}</span>
        </div>
    )
}