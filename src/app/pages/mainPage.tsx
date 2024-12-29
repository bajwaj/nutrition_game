import Link from "next/link";

export default function MainPage() {
    return (
        <div className="bg-[#DCDCDC] flex flex-col h-screen justify-center items-center">
            <p className="py-8 text-8xl font-['Cursive'] font-bold">Healthy match</p>
            <Link href="/start" className="text-center w-1/4 py-3 my-5 border border-black rounded-3xl bg-[#BEBEBE] text-2xl">
                <button>Start</button>
            </Link>
            <Link href="/options" className="text-center w-1/4 py-3 my-5 border border-black rounded-3xl bg-[#BEBEBE] text-2xl">
                <button>Options</button>
            </Link>
            <button className="w-1/4 py-3 my-5 border border-black rounded-3xl bg-[#BEBEBE] text-2xl">Quit to desktop</button>
        </div>
    )
}
