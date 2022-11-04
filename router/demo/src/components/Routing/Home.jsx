import { Routes, Route, Link } from "react-router-dom";
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
      </main>
      <nav>
        <Link className="me-2" to="/about">About</Link>
        <Link to="/information">Information</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>You are stay in About page</p>
      </main>
      <nav>
       
        <Link to="/">Home</Link>
        <Link to="/information">Information</Link>
      </nav>
    </>
  );
}
function Infor() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>You are stay in Information page</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <nav>
        <Link to="/information/infor1">Infor1</Link>
        <Link to="/information/infor2">Infor2</Link>
      </nav>

    </>
  );
}
function Infor1() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>You are stay in Information 1 page</p>
        </main>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }
  function Infor2() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>You are stay in Information 2 page</p>
        </main>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </>
    );
  }
export { Home, About, Infor, Infor1, Infor2 };