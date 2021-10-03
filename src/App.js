
import './App.css';
import TodoContainer from './components/TodoContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <main>
        <Switch>
          <Route path='/' exact component={Login}></Route>
          <Route path="/login" component={Login}/>
        </Switch>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
