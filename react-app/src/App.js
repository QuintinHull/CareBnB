import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import LoginModal from "./components/auth/LoginForm";
import SignUpModal from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import configureStore from "./store";

import HomePage from "./components/HomePageComponent";
import SpotPage from "./components/SpotComponent/SpotPage";
import BookingPageComponent from "./components/BookingPageComponent";
import FundingComponent from "./components/FundingComponent";
import SearchPage from "./components/SearchComponent/SearchPage";
import SpotCreate from "./components/SpotComponent/SpotCreate";
import FooterComponent from "./components/FooterComponent"

const store = configureStore();

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />
        <LoginModal show={showLogin} onHide={() => setShowLogin(false)} authenticated={authenticated} setAuthenticated={setAuthenticated} setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />
        <SignUpModal show={showSignUp} onHide={() => setShowSignUp(false)} authenticated={authenticated} setAuthenticated={setAuthenticated} setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />
        <Switch>
          <ProtectedRoute
            path="/users"
            exact={true}
            authenticated={authenticated}
            setShowSignUp={setShowSignUp}
          >
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute
            path="/users/:userId"
            exact={true}
            authenticated={authenticated}
            setShowSignUp={setShowSignUp}
          >
            <User />
          </ProtectedRoute>

          {/* Home Page: */}
          <Route path='/' exact={true}>
            <HomePage authenticated={authenticated} setAuthenticated={setAuthenticated} setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />
          </Route>

          {/* testing spot create */}
          <ProtectedRoute
            path="/spot/create/"
            exact={true}
            authenticated={authenticated}
            setShowSignUp={setShowSignUp}
          >
            <SpotCreate />
          </ProtectedRoute>

          {/* Spot Page */}
          <ProtectedRoute
            path="/spot/:spotId"
            exact={true}
            authenticated={authenticated}
            setShowSignUp={setShowSignUp}
          >
            <SpotPage />
          </ProtectedRoute>

          {/* Booking Page */}
          <ProtectedRoute
            path="/spot/book/:spotId"
            exact={true}
            authenticated={authenticated}
            setShowSignUp={setShowSignUp}
          >
            <BookingPageComponent />
          </ProtectedRoute>

          {/* Funding Page */}
          <ProtectedRoute
            path="/spot/fund/:spotId"
            exact={true}
            authenticated={authenticated}
            setShowSignUp={setShowSignUp}
          >
            <FundingComponent />
          </ProtectedRoute>

          {/* Search Page */}
          <ProtectedRoute
            path="/locate"
            authenticated={authenticated}
            setShowSignUp={setShowSignUp}
          >
            <SearchPage />
          </ProtectedRoute>
          <ProtectedRoute
            path='/locate'
            authenticated={authenticated}
            setShowSignUp={setShowSignUp}
          >
            <SearchPage />
          </ProtectedRoute>
        </Switch>
        <FooterComponent />
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
