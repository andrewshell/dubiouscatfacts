import CatFactDisplay from './components/CatFactDisplay';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-7xl text-center font-bold mb-8">Dubious Cat Facts</h1>
      <CatFactDisplay />
    </main>
  )
}
