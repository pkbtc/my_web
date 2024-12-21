import React from "react";

function Home() {
  return (
    <div>
      {/* Social Links in Top-Right */}
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>

      {/* Main Content */}
      <div className="container">
        <header>
          <h1>hello, i am pk.eth</h1>
          <p>i am a second year student, studying electronics and communication.</p>
          <p>i mainly work in blockchain and web3 i like to build financial products
            and exlore web3 projects on daily basis.
          </p>
          <p></p>
        </header>

        <section>
          <h2>projects i have done</h2>
          <ul>
            <li>neugrad</li>
            <li>neupy</li>
            <li>neuaug</li>
            <li>ml papers in code</li>
            <li>from scratch in c</li>
          </ul>
        </section>

        <section>computer science
          <h2>research papers</h2>
          <p>[working on one rn]</p>
        </section>

        <section>
          <h2>blogs</h2>
          <ul>
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
