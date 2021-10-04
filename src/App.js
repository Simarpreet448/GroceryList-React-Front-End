
import React, { useEffect } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Register from './pages/register/Register';
import GuardedRoute from './components/GuardedRoute';
import { useDispatch } from 'react-redux';
import { fetchUser } from './store/apiCalls';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUser())
})
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <main>
        <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
          <GuardedRoute path='/todo' component={TodoContainer} requiredRole={null}></GuardedRoute>
        </Switch>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
