import { Footer } from '../../component/Footer'

const info = () => {
  return (
    <>
      <div class="container min-h-[calc(100vh_-_64px)] flex justify-center items-center">
        <div className="flex flex-col">
          <h2 className="text-3xl font-thin">infoページ</h2>
          <div className="flex gap-2">
            <a className="border-b-2 border-transparent boder hover:border-current" href="../about">about</a>
            {/*<a className="underline" href="../about">about</a> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default info;
