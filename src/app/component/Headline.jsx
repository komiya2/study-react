"use client"

export function Headline(props) {
  return (
    <>
      <div className="flex items-center flex-col p-2">
        <h1 className="font-bold text-2xl pb-5">{props.title} Page</h1>
        <p className="{style.description} ">
          <span className="font-extrabold pr-2">Index Page Get started by editing </span>
          <code className="{style.code}">/{props.page}/index.js</code>
        </p>
      </div>
    </>
  );
}


