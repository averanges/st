import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <Link href='/questions1'>
          <button className="bg-amber-300 rounded-full py-3 px-10 shadow-md shadow-amber-500 text-white font-semibold hover:shadow-xl duration-500">Start Test</button>
        </Link>
    </main>
  )
}
