import Image from "next/image";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Main_link } from "./component/Main_link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh_-_64px)] px-24 pt-[100px] flex flex-col items-center justify-between">
        <div className="min-h-full flex items-center justify-center flex-col lg:pt-16">
          <div className="lg:pt-16 pb-0 lg:pb-16 flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
          </div>

          <Main_link />
        </div>
      </main>
      <Footer />
    </>
  );
}
