import Link from "next/link";

export default function Start() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-2xl">
            <p className="font-bold">Choose your stats</p>
            <table className="my-5">
                <tbody className="border border-black">
                    <tr className="border border-black">
                        <td className="font-bold">Age ranges</td>
                    </tr>
                    <tr>
                        <td>
                            <ul>
                                <li>14-18</li>
                                <li>19-30</li>
                                <li>31-50</li>
                                <li>51+</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody className="border border-black">
                    <tr>
                        <td className="font-bold">Gender</td>
                    </tr>
                    <tr className="border border-black">
                        <td>
                            <ul>
                                <li>Male</li>
                                <li>Female</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link href="/" className="text-center w-1/4 py-3 my-5 border border-black rounded-3xl bg-[#BEBEBE] text-2xl">
                <button>Continue</button>
            </Link>
        </div>
    )
}