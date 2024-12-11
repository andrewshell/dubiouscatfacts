import CatFactDisplay from './components/CatFactDisplay';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:justify-center p-4">
      <h1 className="text-7xl text-center font-bold mb-8">Dubious Cat Facts</h1>
      <CatFactDisplay />
      <footer className="fixed bottom-2 right-2">
        <a 
          href="https://github.com/andrewshell/dubiouscatfacts"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-500 hover:text-gray-700 transition-opacity opacity-75 hover:opacity-100"
        >View Source</a>
      </footer>
    </main>
  )
}
