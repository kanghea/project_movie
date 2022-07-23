import React, {component, useState} from 'react';

function Act() {
    const [act1,setAct1] = useState(false);
    const [act2, setAct2] = useState(false);
    const [act3, setAct3] = useState(false);
    return <>
      <div className="w-full h-auto flex flex-wrap mb-36 gap-10 mt-5 flex-col xl:px-52 absolute ">
        <a className='w-[525px]'>
          <div className="mt-5 w-[525px] bg-gray-100 hover:bg-blue-400 hover:mt-0 hover:mb-5 duration-100 h-[632px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400 ">
            <div className="text-[40px] leading-[60px] font-semibold">매물등록</div>
            <div className="text-lg font-normal">소장이 하나하나 검토해서 신뢰성있는 매물 多<br></br> 인공지능 가격분석으로 합리적인 가격까지</div>
            <div className="pt-5">
              <button className="px-3 py-3 w-32 h-auto border-2 rounded-3xl" onClick={() => { setAct1(true); }}>자세히보기➜</button>
            </div>
            <img src='img/등록.png' className='h-[150px] mt-52 ml-72'  />
          </div>
        </a>
        <a href="/" className='w-[525px]'>
          <div className="mt-5 w-[525px] bg-gray-100 hover:bg-green-400 hover:mt-0 hover:mb-5 duration-100 h-[532px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400">
            <div className="text-[40px] leading-[60px] font-semibold">지도기반 매물 표시 </div>
            <div className="text-lg font-normal">신뢰성 높은 매물과 합리적인 가격과<br></br> 가독성 높은 지도 UI</div>
            <div className="pt-5">
              <button className="px-3 py-3 w-32 h-auto border-2 rounded-3xl" onClick={() => {setAct2(true);}}>자세히보기➜</button>
            </div>
            <img src='img/지도이미지.png' className='h-[150px] mt-32 ml-72'  />
          </div>
        </a>
        <a href="/" className='w-[525px]'>
          <div className="mt-5 bg-gray-100 hover:bg-yellow-400 hover:mt-0 hover:mb-5 duration-100 h-[632px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400 ">
            <div className="text-[40px] leading-[60px] font-semibold">매물광고</div>
            <div className="text-lg font-normal">소장이 하나하나 검토해서 신뢰성있는 매물 多<br></br> 인공지능 가격분석으로 합리적인 가격까지</div>
            <div className="pt-5">
              <div className="px-3 py-3 w-32 h-auto border-2 rounded-3xl">자세히보기➜</div>
            </div>
          </div>
        </a>
        <a href="/" className='w-[525px]'>
          <div className="mt-5 w-[525px] bg-gray-100 hover:bg-red-400 hover:mt-0 hover:mb-5 duration-100 h-[632px] rounded-[40px] p-10 hover:text-white hover:border-white border-stone-400 ">
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
          <div className='z-10 w-full h-full bg-black/70 fixed top-0 left-0 flex align-middle justify-center items-center'onClick={() => {setAct1(false);}}>
            <div className='z-20 w-[720px] h-[600px] p-8 bg-white rounded-[40px]'onClick={()=> {setAct1(true);}}>
              <div className='absolute w-[640px] border-b-gray-400'>
                <div className='text-2xl mb-6 font-semibold'>매물등록</div>
                <ul className='flex gap-12 text-xl text-gray-400 w-full border-b-2 border-black font-[550] pb-2'>
                  <li className='hover:text-black hover:border-b-4'>간편한 매물 등록</li>
                  <li className='hover:text-black hover:border-b-4'>철저한 매물 관리</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  }
  export default Act;