import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>HINDI MEDIUM CENTRAL</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h3 className="title">
      HINDI MEDIUM CENTRAL
      </h3>
      {/* <h1 className="title"> </h1> */}
      {/* <p className="description">
      <code>Literature </code>, <code>Spirituality </code>  , <code>Ethics </code> , <code>Academics</code> and <code>Literature</code>
      </p> */}

      <div className="grid">
        <a href="#" className="card">
          <h3>Spirituality &rarr;</h3>
          <p>Find in-depth information about Indian Spirituality.</p>
        </a>

        <a href="#" className="card">
          <h3>Ethics &rarr;</h3>
          <p>Learn about Ethics in an interactive way!</p>
        </a>

        <a
          href="#"
          className="card"
        >
          <h3>Academics &rarr;</h3>
          <p>Dive into the  contemporary education system.</p>
        </a>

        <a
          href="#"
          className="card"
        >
          <h4>Literature &rarr;</h4>
          <p>
            Read the interesting articles and poem.
          </p>
        </a>
      </div>
    </main>

    <footer>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        Copyrights Reserved @ Hindi Medium Education.
      </a>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
