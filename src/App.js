function App() {
  return (
    <div className="App">
      <header className="col-6">
        <h1>#todo</h1>
      </header>
      <main>
        <div className="container">
          <div className="option-container">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
          <div className="form-container">
            <form action="">
              <div className="form-control">
                <input type="text" className="input-text" />
                <input type="submit" className="button-submit" value="Add" />
              </div>
            </form>
          </div>
          <div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Do coding challenges</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Do coding challenges</label>
            </div>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Do coding challenges</label>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
