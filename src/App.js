import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Explore from './Pages/Explore/Explore';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import Order from './Pages/Order/Order';
import OrderSuccess from './Pages/OrderSuccess/OrderSuccess';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
        <main>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/explore'>
              <Explore></Explore>
            </Route>

            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <Route exact path='/register'>
              <Register></Register>
            </Route>

            

            <Route exact path='/orders/success'>
              <OrderSuccess></OrderSuccess>
            </Route>

            <PrivateRoute exact path='/orders/:bicycle_id'>
              <Order></Order>
            </PrivateRoute>
          </Switch>
          </main>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
