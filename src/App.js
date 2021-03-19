function App() {
  return (
    <div className="App">
      <header className="col-6">
        <h1>#todo</h1>
      </header>
      <main>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
        <div>
          <form action="">
            <div>
              <input type="text" />
              <input type="submit" value="Add" />
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
      </main>
    </div>
  );
}

export default App;
