export default function TopMenu() {
    return (
        <header className="w-full h-12 bg-black flex items-center justify-around gap-72 text-[#FFF6D9] font-unifraktur p-5">
            <span className="">AL</span>
            <nav className="space-x-4 flex gap-6 text-[#FFF6D9]">
                <a href="#about" className="">About</a>
                <a href="#projects" className="">Projects</a>
                <a href="#contact" className="">Contact</a>
            </nav>
            <span className="">2025</span>
        </header>
    )
}