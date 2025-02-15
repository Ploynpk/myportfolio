import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/assests/logo.png"
          alt="logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {/* <li className="mb-2"> */}
            Coming soon ..{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              Next.js , TypeScript , OpenAI , Python , Webpack , Cypress , Jest , CI/CD , Redis , RabbitMQ, WebSocket
            </code>
            .
          {/* </li> */}
          {/* <li>Save and see your changes instantly.</li> */}
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="mailto:ploy@ploynapa.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Contact Me
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat with me →
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/assests/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/assests/images.png"
            alt="File icon"
            width={55}
            height={55}
          />
          Resume
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/ploynapa-py/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/assests/lnl.png"
            alt="Window icon"
            width={50}
            height={50}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Ploynpk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/assests/i.png"
            alt="Globe icon"
            width={50}
            height={50}
          />
          GitHub
        </a>
      </footer>
    </div>
  );
}
