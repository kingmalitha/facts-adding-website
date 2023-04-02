import "./style.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" height="68" width="68" alt="main-logo" />
          <h1>Today I Learned!</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>

      <NewFactForm />

      <main className="main">
        <CategoryFilters />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact form</form>;
}

function CategoryFilters() {
  return <aside>CategoryFilter</aside>;
}

function FactList() {
  return <section>Facts list</section>;
}

export default App;
