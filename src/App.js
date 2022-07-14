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
function Body() {
  return <div>
    <div className="w-full bg-white h-28">
      <div>
        <a href="/">
          <svg className="-auto "></svg>
        </a>
      </div>

      <div>  
      </div>
    </div>
  </div>
}




function App() {
  return (
    <div>
      <HeaderBenner />
      <Body />
    </div>
  );
}

export default App;
