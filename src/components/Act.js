import React, {useState} from 'react';

function Act() {
    const [act1,setAct1] = useState(false);
    const [act2, setAct2] = useState(false);
    const [act3, setAct3] = useState(false);
    const [act11,setAct11] = useState(true);
    const [act21, setAct21] = useState(false);
    const [act31, setAct31] = useState(false);
    const [act12,setAct12] = useState(false);
    const [act22, setAct22] = useState(false);
    const [act32, setAct32] = useState(false);
    return <>
      <div className="w-full h-auto flex flex-wrap mb-36 gap-10 mt-5 xl:px-26 justify-center transition-all">
        <a className='w-[525px] box-border '>
          <div className="mt-5 w-[525px] bg-gray-100 hover:bg-blue-400 hover:mt-0 hover:mb-5 duration-200 h-[632px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400 ">
            <div className="text-[40px] leading-[60px] font-semibold">매물등록</div>
            <div className="text-lg font-normal">소장이 하나하나 검토해서 신뢰성있는 매물 多<br></br> 인공지능 가격분석으로 합리적인 가격까지</div>
            <div className="pt-5">
              <button className="px-3 py-3 w-32 h-auto border-2 rounded-3xl" onClick={() => { setAct1(true); }}>자세히보기➜</button>
            </div>
            <img src='img/등록.png' className='h-[150px] mt-52 ml-72'  />
          </div>
        </a>
        <a href="/" className='w-[525px] h-[532px]'>
          <div className="mt-5 w-[525px] bg-gray-100 hover:bg-green-400 hover:mt-0 hover:mb-5 duration-200 h-[532px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400">
            <div className="text-[40px] leading-[60px] font-semibold">지도기반 매물 표시 </div>
            <div className="text-lg font-normal">신뢰성 높은 매물과 합리적인 가격과<br></br> 가독성 높은 지도 UI</div>
            <div className="pt-5">
              <button className="px-3 py-3 w-32 h-auto border-2 rounded-3xl" onClick={() => {setAct2(true);}}>자세히보기➜</button>
            </div>
            <img src='img/지도이미지.png' className='h-[150px] mt-32 ml-72'  />
          </div>
        </a>
        <a href="/" className='w-[525px]'>
          <div className="mt-5 bg-gray-100 hover:bg-yellow-400 hover:mt-0 hover:mb-5 duration-200 h-[632px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400 ">
            <div className="text-[40px] leading-[60px] font-semibold">매물광고</div>
            <div className="text-lg font-normal">소장이 하나하나 검토해서 신뢰성있는 매물 多<br></br> 인공지능 가격분석으로 합리적인 가격까지</div>
            <div className="pt-5">
              <div className="px-3 py-3 w-32 h-auto border-2 rounded-3xl">자세히보기➜</div>
            </div>
          </div>
        </a>
        <a href="/" className='w-[525px]'>
          <div className="mt-5 w-[525px] bg-gray-100 hover:bg-red-400 hover:mt-0 hover:mb-5 duration-200 h-[632px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400 ">
            <div className="text-[40px] leading-[60px] font-semibold">매물광고</div>
            <div className="text-lg font-normal">소장이 하나하나 검토해서 신뢰성있는 매물 多<br></br> 인공지능 가격분석으로 합리적인 가격까지</div>
            <div className="pt-5">
              <div className="px-3 py-3 w-32 h-auto border-2 rounded-3xl">자세히보기➜</div>
            </div>
          </div>
        </a>
      </div>
      {act1&&
        <div>
          <div className='z-10 w-full h-full bg-black/70 fixed top-0 left-0 flex justify-center items-center'>
            <div className='flex w-[720px] h-[600px] p-8 bg-white rounded-[40px]'>
              <div className='absolute w-[640px] border-b-gray-400'>
                <div className='text-2xl mb-6 font-semibold'>매물등록</div>
                <ul className='flex gap-12 text-xl text-gray-400 border-b-[1px] border-gray-400 font-[550] pb-5'>
                  <li className= 'hover:text-black focus:text-black cursor-pointer' onClick={()=>{setAct11(true);}}>간편한 매물 등록</li>
                  <li className='hover:text-black cursor-pointer' onClick={()=>{setAct11(false);}}>철저한 매물 관리</li >
                  <button type="button" className="flex-none col-span-1 text-gray-400 hover:text-gray-800 ml-auto" onClick={() => {
                    setAct1(false);
                  }}>
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </ul>
                {act11
                    ?<div> 
                      <div className='w-auto h-auto mt-5 block overflow-y-scroll overflow-x-hidden'>
                        <div>Content</div>
                        <div>Content</div>
                      </div>
                    </div>
                    :<div className='w-auto h-auto mt-5 block overflow-y-scroll overflow-x-hidden'>
                      <div>content?</div>
                    </div>} 
              </div>
            </div>
          </div>
        </div>
      }
    </>
  }
  export default Act;