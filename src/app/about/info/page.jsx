
import { Header } from "src/app/component/Header";
import { Footer } from "src/app/component/Footer";

const info = () => {
  return (
    <>
        <Header />

        <div className="container min-h-[calc(100vh_-_64px)] flex justify-center items-center">
          <div className="flex flex-col">
            <h2 className="text-3xl font-thin">infoページ</h2>
            <div className="flex gap-2">
              <a href="../about" className="border-b-2 border-transparent boder hover:border-current">
                about
              </a>
            </div>
          </div>
        </div>

        <Footer />
    </>
  );
};

export default info;
