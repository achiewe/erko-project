"use client";
import LoadingContainer from "./components/Loading/LoadingContainer";
// import LoadingContainer from "./components/Loading/LoadingContainer";
import PageList from "./components/pageList/pageList";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen bg-[#EEEEEE] justify-center items-center">
      <main className="flex px-[15px] pt-[15px] w-full">
        <PageList />
        <LoadingContainer />
      </main>
    </main>
  );
}
