import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}></Route>

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
