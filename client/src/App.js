import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div class="container" style={{width: 600, margin: "auto"}}>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
            <a class="navbar-brand" href="#">
              <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
              Chuck
            </a>
          </nav>

          <div style={{padding: 20}}>
            <div class="input-group">
              <select class="custom-select" id="inputGroupSelect04">
                <option selected>Choose category...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">Get Joke</button>
              </div>
            </div>
          </div>

          <div style={{padding: 20}}>
            <div class="card" style={{borderRadius: 10, padding: 10, margin: "auto"}}>
              <img class="card-img-top" style={{margin: "auto",width: 150}} src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="Card image cap"/>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            </div>

        </div>
    </div>
  );
}

export default App;
