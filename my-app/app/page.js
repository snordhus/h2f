import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-4">
      <h1 class="text-4xl pb-8">H2F Documents:</h1>

      <div class="pl-8 mb-8">
        <a class="text-2xl bg-blue-500 hover:bg-red-500" href="https://www.hprc-online.org/" target="_blank" rel="noreferrer noopener">
          HPRC Homepage</a>
        <div class="pl-8">
          <p>Synopsis:</p>
          <p>Contact a Specialist:</p>
        </div>
      </div>

      <div class="pl-8 mb-8">
        <a class="text-2xl bg-blue-500 hover:bg-red-500" href="https://usacimt.tradoc.army.mil/ACFTGuidance.html" target="_blank" rel="noreferrer noopener">
        CIMT Resources</a>
        <div class="pl-8">
          <p>Synopsis:</p>
          <p>Contact a Specialist:</p>
        </div>
      </div>
      
      <div class="pl-8 mb-8">
        <a class="text-2xl bg-blue-500 hover:bg-red-500" href="https://www.nationalguard.mil/resources/holistic-wellness-challenge/" target="_blank" rel="noreferrer noopener">
          National Guard Wellness Challenge</a>
        <div class="pl-8">
          <p>Synopsis:</p>
          <p>Contact a Specialist:</p>
        </div>
      </div>
      <div className="border bg-white flex w-[707px] flex-col border-solid border-black">
      {/* <div className="bg-zinc-300 self-stretch flex w-full items-start justify-between gap-5 mt-1 pl-3.5 pr-5 py-1.5 max-md:flex-wrap max-md:justify-center">
        <div className="text-black text-xs font-medium bg-white w-[49px] max-w-full -mt-px pl-1.5 pr-5 pt-3 pb-1.5">
          logo
          <br />
        </div>
        <div className="flex items-start gap-3 -mt-0.5 max-md:justify-center">
          <div className="text-black text-xs font-medium self-stretch bg-white w-[49px] max-w-full pr-3 pt-1.5 pb-2.5">
            Physical
          </div>
          <div className="text-black text-xs font-medium self-stretch bg-white w-[49px] max-w-full pr-5 pt-2 pb-2.5">
            Mental
          </div>
          <div className="bg-white self-stretch flex w-[49px] h-[25px] flex-col" />
          <div className="bg-white self-stretch flex w-[49px] h-[25px] flex-col" />
          <div className="bg-white self-stretch flex w-[49px] h-[25px] flex-col" />
        </div>
        <div className="flex items-start gap-3.5 -mt-0.5">
          <div className="text-black text-xs font-medium self-stretch bg-white w-[49px] max-w-full pl-3.5 pr-3 pt-2 pb-2">
            log in
          </div>
          <div className="text-black text-xs font-medium self-stretch bg-white w-[49px] max-w-full pl-2 pr-3 py-2.5">
            search
          </div>
        </div>
      </div> */}
      <div className="bg-zinc-100 self-stretch flex w-full h-[183px] flex-col max-md:max-w-full" />
      <div className="bg-zinc-300 self-center flex w-[377px] h-[34px] flex-col ml-3 mt-9" />
      <div className="self-center w-[495px] max-w-full mt-11 px-5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col w-[136px] max-md:mt-9">
              <div className="bg-zinc-300 self-stretch flex w-full h-[172px] flex-col max-md:mr-px" />
              <div className="bg-zinc-300 self-stretch flex w-full h-6 flex-col mt-6 max-md:mr-px" />
              <div className="bg-zinc-300 self-stretch flex w-full h-[172px] flex-col mt-11 max-md:mt-10" />
              <div className="bg-zinc-300 self-stretch flex w-full h-6 flex-col mt-6" />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:mt-9">
              <div className="bg-zinc-300 flex w-[135px] h-[172px] flex-col" />
              <div className="bg-zinc-300 flex w-[135px] h-6 flex-col mt-6" />
              <div className="bg-zinc-300 flex w-[135px] h-[172px] flex-col mt-11 max-md:ml-2.5 max-md:mt-10" />
              <div className="bg-zinc-300 flex w-[135px] h-6 flex-col mt-6 max-md:ml-2.5" />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col w-[135px] max-md:mt-9">
              <div className="bg-zinc-300 self-stretch flex w-full h-[172px] flex-col" />
              <div className="bg-zinc-300 self-stretch flex w-full h-6 flex-col mt-6" />
              <div className="bg-zinc-300 self-stretch flex w-full h-[172px] flex-col mt-11 max-md:mt-10" />
              <div className="bg-zinc-300 self-stretch flex w-full h-6 flex-col mt-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-300 self-stretch flex flex-col mt-11 px-5 py-14 max-md:max-w-full max-md:mt-10">
        <div className="self-center flex ml-0 w-[386px] max-w-full flex-col -mb-px">
          <div className="bg-white flex w-full h-10 flex-col" />
          <div className="bg-white flex w-52 h-10 flex-col mt-14 max-md:mt-10" />
          <div className="bg-white flex w-[330px] h-[162px] flex-col mt-11 max-md:mt-10" />
        </div>
      </div>
      <div className="self-center w-[637px] max-w-full mt-20 px-5 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[6%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[0.89] object-cover object-center w-[34px] rotate-[-88.709deg] fill-zinc-300 overflow-hidden max-w-full shrink-0 my-auto max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[88%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-zinc-300 flex w-[491px] h-[249px] flex-col mx-auto max-md:max-w-full max-md:mt-10" />
          </div>
          <div className="flex flex-col items-stretch w-[6%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="..."
              className="aspect-[0.87] object-cover object-center w-[33px] rotate-90 fill-zinc-300 overflow-hidden max-w-full shrink-0 my-auto max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="bg-zinc-300 self-center flex w-[491px] h-[39px] flex-col mt-11 max-md:max-w-full max-md:mt-10" />
      <div className="bg-zinc-300 self-stretch flex grow flex-col mt-20 pt-7 px-5 max-md:max-w-full max-md:mt-10">
        <div className="self-center w-[622px] max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col w-[188px] max-md:mt-7">
                <div className="bg-white self-stretch flex w-full h-[33px] flex-col" />
                <div className="bg-white self-stretch flex w-full h-[33px] flex-col mt-3.5" />
                <div className="bg-white self-stretch flex w-full h-[33px] flex-col mt-3.5" />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col w-[188px] max-md:mt-7">
                <div className="bg-white self-stretch flex w-full h-[33px] flex-col" />
                <div className="bg-white self-stretch flex w-full h-[33px] flex-col mt-3.5" />
                <div className="bg-white self-stretch flex w-full h-[33px] flex-col mt-3.5" />
                <div className="bg-white self-center flex w-[75px] h-[35px] flex-col mt-3.5" />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col w-[188px] max-md:mt-7">
                <div className="bg-white self-stretch flex w-full h-[33px] flex-col" />
                <div className="bg-white self-stretch flex w-full h-[33px] flex-col mt-3.5" />
                <div className="bg-white self-stretch flex w-full h-[33px] flex-col mt-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}
