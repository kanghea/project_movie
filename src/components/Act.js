import React, {component, useState} from 'react';

function Act() {
    const [act1,setAct1] = useState(false);
    const [act2, setAct2] = useState(false);
    const [act3, setAct3] = useState(false);
    return <>
      <div className="w-full h-auto flex flex-wrap mb-36 xl:px-52 gap-7 mt-5 justify-between">
        <a>
          <div className="mt-5 w-[525px] bg-gray-100 hover:bg-blue-400 hover:mt-0 hover:mb-5 duration-100 h-[632px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400 ">
            <div className="text-[40px] leading-[60px] font-semibold">매물광고</div>
            <div className="text-lg font-normal">소장이 하나하나 검토해서 신뢰성있는 매물 多<br></br> 인공지능 가격분석으로 합리적인 가격까지</div>
            <div className="pt-5">
              <button className="px-3 py-3 w-32 h-auto border-2 rounded-3xl" onClick={() => {setAct1(true);}}>자세히보기➜</button>
            </div>
          </div>
        </a>
        <a href="/">
          <div className="mt-5 w-[525px] bg-gray-100 hover:bg-green-400 hover:mt-0 hover:mb-5 duration-100 h-[532px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400">
            <div className="text-[40px] leading-[60px] font-semibold">지도기반 매물 표시 </div>
            <div className="text-lg font-normal">신뢰성 높은 매물과 합리적인 가격과<br></br> 가독성 높은 지도 UI</div>
            <div className="pt-5">
              <div className="px-3 py-3 w-32 h-auto border-2 rounded-3xl">자세히보기➜</div>
            </div>
          </div>
        </a>
        <a href="/">
          <div className="mt-5 w-[525px] bg-gray-100 hover:bg-yellow-400 hover:mt-0 hover:mb-5 duration-100 h-[632px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400 ">
            <div className="text-[40px] leading-[60px] font-semibold">매물광고</div>
            <div className="text-lg font-normal">소장이 하나하나 검토해서 신뢰성있는 매물 多<br></br> 인공지능 가격분석으로 합리적인 가격까지</div>
            <div className="pt-5">
              <div className="px-3 py-3 w-32 h-auto border-2 rounded-3xl">자세히보기➜</div>
            </div>
          </div>
        </a>
        <a href="/">
          <div className="mt-5 w-[525px] bg-gray-100 hover:bg-red-400 hover:mt-0 hover:mb-5 duration-100 h-[632px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400 ">
            <div className="text-[40px] leading-[60px] font-semibold">매물광고</div>
            <div className="text-lg font-normal">소장이 하나하나 검토해서 신뢰성있는 매물 多<br></br> 인공지능 가격분석으로 합리적인 가격까지</div>
            <div className="pt-5">
              <div className="px-3 py-3 w-32 h-auto border-2 rounded-3xl">자세히보기➜</div>
            </div>
          </div>
        </a>
      </div>
      {act1 &&
      <div>
        <div className='z-10 w-full h-full bg-black/90'>

        </div>
      </div>
        
      }
    </>
  }
  export default Act;