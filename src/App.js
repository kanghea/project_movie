import React, { useState } from "react";
import './App.css';

function HeaderBenner() {
  const [show, setShow] = useState(true);
  return <div>
    {
      show &&
      <div className="w-full bg-orange-400 h-16">
        <div className="align-middle text-center pt-5 text-base">
          <a href="/read1">
            <span className="text-white mt-3">
              대구 부동산 연구소 상담문의 바로가기
            </span>
          </a>
          <button type="button" class="pl-10 text-orange-100 inline-flex items-center justify-center hover:text-orange-500 focus:ring-inset" onClick={() => {
            setShow(false);
          }}>
            <span class="sr-only">Close menu</span>
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    }
  </div>
}
function Header() {
  return <>
    <div className="w-full h-28">
      <div className="flex flex-row grow-0 pl-10 pr-10 bg-white align-middle">
        <div className="flex-none basis-48 w-40">
          <a href="/">
            <img alt="logo" src="img/logo.png" />
          </a>
        </div>
        <div className="basis-1/2 grow"></div>
        <div className="flex-none basis-64 w-64 pt-10">
          <div className="text-xs flex flex-row">
            <a className="basis-5/12" href="/">자세히 알아보기</a>
            <div className="basis-1/6"></div>
            <a className="basis-5/12" href="/">대구 부동산 연구소</a>
          </div>
        </div>
      </div>
    </div>

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
