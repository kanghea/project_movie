import React, {component, useState} from 'react';
function Header() {

    return <>
    {
      <div className="w-full h-28 sticky top-0 backdrop-blur drop-shadow-sm antialiased box-border" id="main-header">
        <div className="w-full h-full flex grow-0 bg-white/90 justify-between content-center items-center lg:px-52" id="main-header">
          <div className="flex-none basis-48 w-40">
            <a href="/">
              <img alt="logo" src="img/logo.png" className="" />
            </a>
          </div>
          <div className="flex-none basis-96 w-72">
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
  export default Header;