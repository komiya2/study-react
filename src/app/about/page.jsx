"use client"
import { Header } from "src/app/component/Header";
import { Footer } from "src/app/component/Footer";
import { Headline } from "src/app/component/Headline";

const about = () => {
  return (
    <>
      <Header />

      <div className="container mx-auto min-h-[calc(100vh_-_64px)] flex justify-center items-center">
        <div className="flex flex-col justify-center ">

          <Headline page="about" title="AB0UT" />

          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-thin">aboutページ</h2>
            <div className="flex gap-2">
              <a className="border-b-2 border-transparent hover:border-current" href="/">
                top
              </a>
              <a className="border-b-2 border-transparent hover:border-current" href="about/info/">
                info
              </a>
            </div>
          </div>

        </div>
      </div>

      <Footer />
      
    </>
  );
};

export default about;
