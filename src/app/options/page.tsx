import Link from "next/link";

export default function Options() {

    return (
        <div className="bg-[#DCDCDC] flex flex-col h-screen">
            <div className="flex flex-row">
                <div className="justify-start">
                    <Link href="/">
                        <img src="/left-arrow.png" className="object-scale-down w-3/4 h-3/4"></img>
                    </Link>
                    <p className="text-3xl text-center">Back to game</p>
                </div>
                <div className="text-center">
                    <p className="text-8xl font-bold">Options menu</p>    
                </div>
            </div>  
        </div>
    )
}