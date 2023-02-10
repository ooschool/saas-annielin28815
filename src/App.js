import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/home">Home</Link>
      </div>
      <div>
        <Link to="/login">login</Link>
      </div>
      <div>
        <Link to="/member">member center</Link>
      </div>
      <div>
        <Link to="/orders">orders</Link>
      </div>

      <Switch>
        <Route path="/home">Home</Route>
        <Route path="/login">login</Route>
        <Route path="/member">member center</Route>
        <Route path="/orders">orders</Route>
        <Route path="/step/1">Step 1</Route>
        <Route path="/step/2">Step 2</Route>
        <Route path="/step/3">Step 3</Route>
        <Route path="/step/4">Step 4</Route>
        <Route path="/step/5">Step 5</Route>
        {/* <Route path="*">404 page</Route> */}
      </Switch>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Reservation System</p>
    //   </header>
    // </div>
  );
}

export default App;
