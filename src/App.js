import React, { useState } from "react";
import './App.css';

function HeaderBenner() {
  const [show, setShow] = useState(true);
  return <div>
    {
      show &&
      <div className="w-full bg-orange-400 h-16 antialiased">
        <div className="flex columns-5 items-center h-full">
          <div className="flex-none grow col-span-1"></div>
          <a href="/read1">
            <span className="text-white mt-3 col-span-1 pl-10">
                <strong>대구 부동산 연구소 상담문의 바로가기 ➜</strong>
            </span>
          </a>
          <a href="/read1">  
            <div className="basis-5"></div>
          </a>
          <a href="/read1" className="w-auto h-full lg:pl-10">
            <img src="img/lol.png" className="w-auto h-full lg:pl-10"></img>
          </a>
          <div className="flex-none grow col-span-1"></div>
          <button type="button" className="flex-none col-span-1 text-orange-100 hover:text-orange-500 pl-auto pr-52" onClick={() => {
            setShow(false);
          }}>
          <span class="sr-only">Close menu</span>
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
      </div>
    </div>}
  </div>
}
function Header() {
  return <>
  {
    <div className="w-full h-28 antialiased">
      <div className="w-full h-full flex grow-0 bg-white justify-between content-center lg:px-52 sticky top-0">
        <div className="flex-none basis-48 w-40">
          <a href="/">
            <img alt="logo" src="img/logo.png" />
          </a>
        </div>
        <div className="flex-none basis-96 w-72 pt-8">
          <div className="text-xs flex flex-row">
            <a className="basis-48 color-white bg-orange-400 text-white border-solid rounded-3xl h-10 align-middle text-center pt-2 hover:bg-orange-500 text-sm border-2 border-orange-300" href="/"><strong> 대.부.연 앱 다운하기 ➜</strong></a>
            <div className="basis-4"></div>
            <a className="basis-48 bg-white border-solid rounded-3xl h-10 align-middle text-center pt-2 hover:bg-slate-100 text-sm border-2 border-gray-300" href="/"><strong>대.부.연 웹사이트 ➜</strong></a>
          </div>
        </div>
      </div>
    </div>
  }
  </>
}





function App() {
  return (
    <div>
      <HeaderBenner />
      <Header />
    </div>
  );
}

export default App;
