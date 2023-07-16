import { ButtonExample } from "./components"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="rounded overflow-hidden shadow-lg bg-white w-3/5 flex-grow text-black py-2 px-5 flex items-center justify-center">
        <ButtonExample />
      </div>
    </main>
  )
}
