import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import Registration from './pages/Registration/Registration';
import RoomDetails from './pages/Rooms/RoomDetails/RoomDetails';
import Rooms from './pages/Rooms/Rooms';
import PrivetRouter from './PrivetRouter/PrivetRouter'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/rooms">
            <Rooms />
          </Route>
          <PrivetRouter path="/roomDetails/:RoomID">
            <RoomDetails />
          </PrivetRouter>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;