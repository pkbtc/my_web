import React from "react";

function Home() {
  return (
    <div className="bg-black text-white font-mono leading-relaxed">
      {/* Social Links in Top-Right */}
      <div className="absolute top-2 right-2">
        <a
          href="https://github.com/pkbtc"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-white hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com/KashyapParasar"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-white hover:underline"
        >
          Twitter
        </a>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 max-w-3xl scale-90 origin-top">
        <header>
          <h1 className="text-4xl font-bold mb-4">hello, i am pk.eth</h1>
          <p className="text-gray-300 mb-2">
            i am a second year student, studying electronics and communication.
          </p>
          <p className="text-gray-300 mb-2">
            i mainly work in blockchain and web3. i like to build financial
            products and explore web3 projects on a daily basis.
          </p>
        </header>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">projects i have done</h2>
          <ul className="list-none mt-4 space-y-2">
            <li>neugrad</li>
            <li>neupy</li>
            <li>neuaug</li>
            <li>ml papers in code</li>
            <li>from scratch in c</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">research papers</h2>
          <p className="text-gray-300 mt-2">[working on one rn]</p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold">blogs</h2>
          <ul className="list-none mt-4 space-y-2">
            <li>all my ml blogs</li>
            <li>how to get into cs</li>
            <li>how to get into ml</li>
            <li>my thoughts</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
