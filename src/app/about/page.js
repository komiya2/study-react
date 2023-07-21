import { Footer } from '../component/Footer'
 
const about = () => {
  return (
    <>
      <div className="container min-h-[calc(100vh_-_64px)] flex justify-center items-center">
        <div className="flex flex-col ">
          <h2 className="text-3xl font-thin">aboutページ</h2>
          <div className="flex gap-2">
            <a className="border-b-2 border-transparent hover:border-current" href="/">top</a>
            <a className="border-b-2 border-transparent hover:border-current" href="about/info/">info</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default about;
