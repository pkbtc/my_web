import React from "react";

function Home() {
  return (
    <div className="bg-black text-white font-mono leading-relaxed min-h-screen">
      {/* Social Links in Top-Right */}
      <div className="absolute top-2 right-2 flex space-x-4">
        <a
          href="https://github.com/pkbtc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/parasar-kashyap-b06176240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:underline"
        >
          Linkedin
        </a>
        <a
          href="/resume.pdf"
          download
          className="text-white hover:underline"
        >
          Resume
        </a>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 max-w-3xl scale-90 origin-top md:pl-0">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-center md:text-left sm:whitespace-nowrap">hello,i am pk.eth</h1>
          <p className="text-gray-300 mb-2 text-center md:text-left">
            i am a second year student, studying electronics and communication.
          </p>
          <p className="text-gray-300 mb-2 text-center md:text-left">
            i mainly work in blockchain and web3. i like to build financial
            products and explore web3 projects on a daily basis.
          </p>
        </header>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-center md:text-left">projects i have done</h2>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-center md:text-left">
            <li><a href="https://github.com/chkg2a/eleutheria" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">eleutheria</a></li>
            <li><a href="https://github.com/pkbtc/crypted_vault" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">crypted vault</a></li>
            <li><a href="https://github.com/pkbtc/Nft_gating" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">nft gating</a></li>
            <li><a href="https://github.com/pkbtc/staking-dapp" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">staking daap</a></li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-center md:text-left"></h2>
          <ul className="list-none mt-4 space-y-2 text-center md:text-left">
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
