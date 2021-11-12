import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Layouts/Footer/Footer';
import Header from './Components/Layouts/Header/Header';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <main>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='/register'>
              <Register></Register>
            </Route>
          </Switch>
          </main>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
