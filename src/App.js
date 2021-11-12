import logo from './logo.svg';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import CreateEvent from './Components/CreateEvent/CreateEvent';
import Event from './Components/Event/Event';
import MyBooking from './Components/MyBooking/MyBooking';
import EventBooking from './Components/EventBooking/EventBooking';
import BookingSuccess from './Components/BookingSuccess/BookingSuccess';
import Home from './Components/Home/Home';
import EventManagement from './Components/EventManagement/EventManagement';
import EventShow from './Components/EventShow/EventShow';

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

            <Route exact path='/event'>
              <Event></Event>
            </Route>

            <Route exact path='/booking/success'>
              <BookingSuccess></BookingSuccess>
            </Route>

            <PrivateRoute exact path="/event/create">
                <CreateEvent></CreateEvent>
            </PrivateRoute>

            <PrivateRoute exact path="/event/manage">
                <EventManagement></EventManagement>
            </PrivateRoute>

            <Route exact path='/event/:event_id'>
              <EventShow></EventShow>
            </Route>


            <PrivateRoute exact path="/booking/:user_id">
                <MyBooking></MyBooking>
            </PrivateRoute>

            <PrivateRoute exact path="/booking">
                <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute exact path="/book/event/:event_id">
                <EventBooking></EventBooking>
            </PrivateRoute>

          </Switch>
          </main>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
