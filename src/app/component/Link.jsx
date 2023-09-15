"use client"

const ITEMS = [
  { href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app", title: "Docs", dscription: "Find in-depth information about Next.js features and API." },
  { href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app", title: "Learn", dscription: "Learn about Next.js in an interactive course with&nbsp;quizzes!" },
  { href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app", title: "Templates", dscription: "Explore the Next.js 13 playground." },
  { href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app", title: "Deploy", dscription: "Instantly deploy your Next.js site to a shareable URL with Vercel." }
];

export function Link() {
  return (
    <>

      <div className="grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        { ITEMS.map ((item ) => {
          return (

            <a key={item.href} href={item.href} className="group m-1 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" target="_blank" rel="noopener noreferrer">
              <h2 className="mb-3 text-2xl font-semibold">
                {item.title}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <div className="flex alain-center">
                    <p>-</p><p className="pt-0.5 pl-0.5">&gt;</p>
                  </div>
                </span>
              </h2>
              <p className="m-0 max-w-[30ch] text-sm opacity-50}"> {item.dscription}</p>
            </a>

          );
        }
        )
        }
      </div>

    </>
  );
}
