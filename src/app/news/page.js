import Image from "next/image";
import { Header } from "../component/Header";
import { Footer } from "../component/Footer";
import { Headline } from "../component/Headline";
import { Main_link } from "../component/Main_link";

export default function News() {
  return (
    <>
      <Header />

      <main className="h-[calc(100%_-_64px)] w-[1000px] m-auto pt-[100px]">
        <Headline className="" page="news" title="NEWS" />

        <div className="flex items-center justify-center pt-10">
          <div className="w-[900px] flex flex-col gap-y-3">
            <p><a href="" className="hover:border-b border-gray-600">３０万円超え？ついにＵＳＢ採用？　どうなるｉＰｈｏｎｅ１５、９月１２日お披露目か</a></p>
            <p><a href="" className="hover:border-b border-gray-600">グーグル、日本語でも「生成AI検索」導入　30日からサービス開始</a></p>
            <p><a href="" className="hover:border-b border-gray-600">３携帯料金「値下げ競争」が終了? 　料金プランに新潮流「経済圏競争」へ</a></p>
            <p><a href="" className="hover:border-b border-gray-600">スーパームーン見えた？　月内2回目の満月は「ブルームーン」とも</a></p>
          </div>
        </div>


        <div className=" flex content-around justify-center flex-col flex-grow justify-around pt-8">

        <Main_link />



        </div>
      </main>
      <Footer />
    </>
  );
}
