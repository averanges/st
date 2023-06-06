import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <Link href='/questions'>
          <button className="bg-teal-300 rounded-full py-3 px-10 shadow-md shadow-teal-500 text-white font-semibold hover:shadow-xl duration-500">Start Test</button>
        </Link>
    </main>
  )
}
