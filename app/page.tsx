export default function Home() {
  return (
    <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 sm:p-20 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center sm:items-start gap-8 row-start-2">
        <div className="flex flex-wrap justify-center items-center row-start-3 font-bold text-zinc-100 select-none">
          Hello
        </div>
      </main>
      <footer className="flex flex-wrap justify-center items-center gap-6 row-start-3">
          Footer
      </footer>
    </div>
  );
}
