import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
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

const store = configureStore();

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

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
        <NavBar setAuthenticated={setAuthenticated} />
        <Switch>
          <Route path="/login" exact={true}>
            <LoginForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>
          <ProtectedRoute
            path="/users"
            exact={true}
            authenticated={authenticated}
          >
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute
            path="/users/:userId"
            exact={true}
            authenticated={authenticated}
          >
            <User />
          </ProtectedRoute>

          {/* Home Page: */}
          <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
            <HomePage />
          </ProtectedRoute>

          {/* testing spot create */}
          <ProtectedRoute
            path="/spot/create/"
            exact={true}
            authenticated={authenticated}
          >
            <SpotCreate />
          </ProtectedRoute>

          {/* Spot Page */}
          <ProtectedRoute
            path="/spot/:spotId"
            exact={true}
            authenticated={authenticated}
          >
            <SpotPage />
          </ProtectedRoute>

          {/* Booking Page */}
          <ProtectedRoute
            path="/spot/book/:spotId"
            exact={true}
            authenticated={authenticated}
          >
            <BookingPageComponent />
          </ProtectedRoute>

          {/* Funding Page */}
          <ProtectedRoute
            path="/spot/fund/:spotId"
            exact={true}
            authenticated={authenticated}
          >
            <FundingComponent />
          </ProtectedRoute>

          {/* Search Page */}
          <ProtectedRoute
            path="/locate"
            authenticated={authenticated}
          >
            <SearchPage />
          </ProtectedRoute>
          <ProtectedRoute
            path='/locate'
            authenticated={authenticated}
          >
            <SearchPage />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
