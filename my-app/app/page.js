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
    </main>
  )
}
