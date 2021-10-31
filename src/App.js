import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Context/AuthProvider';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Register from './Pages/Register/Register';
import Header from './Components/Header/Header';
import TopHeader from './Components/TopHeader/TopHeader';
import HireGuide from './Pages/HireGuide/HireGuide';
import AddGuide from './Pages/Guides/AddGuide';
import GuideDetails from './Pages/HireGuide/GuideDetails';
import MyProfile from './Pages/HireGuide/MyProfile';
import AddPackage from './Pages/AddPackage/AddPackage';
import AllPackages from './Pages/AllPackages/AllPackages';
import PackageDetail from './Pages/AllPackages/PackageDetail';
import UpdatePackage from './Pages/AllPackages/UpdatePackage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UpdateGuide from './Pages/Guides/UpdateGuide';
import AllBooking from './Components/BookNow/AllBooking';
import UpdateBooking from './Components/BookNow/UpdateBooking';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <TopHeader />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/allpackages">
              <AllPackages />
            </Route>
            <PrivateRoute path="/package/:uid">
              <PackageDetail />
            </PrivateRoute>
            <PrivateRoute path="/update-package/:uid">
              <UpdatePackage />
            </PrivateRoute>
            <PrivateRoute path="/addpackage">
              <AddPackage />
            </PrivateRoute>
            <PrivateRoute path="/addguide">
              <AddGuide />
            </PrivateRoute>
            <Route exact path="/hireguides">
              <HireGuide />
            </Route>
            <PrivateRoute path="/hireguides/:gid">
              <GuideDetails />
            </PrivateRoute>
            <PrivateRoute path="/updateguide/:gid">
              <UpdateGuide />
            </PrivateRoute>
            <PrivateRoute path="/hireguide/guide/myprofile">
              <MyProfile />
            </PrivateRoute>
            <PrivateRoute path="/bookings">
              <AllBooking />
            </PrivateRoute>
            <Route path="/updatebook/:bid">
              <UpdateBooking />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
