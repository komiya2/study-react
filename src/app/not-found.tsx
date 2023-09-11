
export default function NotFound() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col">
          <div className="flex justify-center  items-center gap-6 h-14 p-3">
            <h2 className="text-2xl font-bold tracking-wider">404</h2>
            <p className="border-r h-10 border-gray-900"></p>
            <p>Could not find requested resource</p>
          </div>
          <p className="text-center">
            <a
              href="/"
              className="border-b-2 border-transparent hover:border-current"
            >
              View home
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
